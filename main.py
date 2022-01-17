
import datetime
from flask import Flask, render_template, request,redirect,url_for
from submitform import ContactForm

#GOOGLE FIREBASE API

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

"""
#FIREBASE CREDENTIAL CHECK
credential= credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(credential)

db = firestore.Client()
"""

#VALIDATE CREDENTIALS & INITIALISATION
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': 'my-website-336004',
})

db = firestore.client()
"""
app = Flask(__name__)
app.config["SECRET_KEY"]="Myprofoliowebapplication"
@app.route("/")
def my_home():
    return render_template('index.html')

@app.route("/<string:page_name>")
def html_page(page_name):
    form=ContactForm()
    if page_name=="contact.html":
        return render_template("contact.html",form=form)
    return render_template(page_name)

#EMAIL-SUBMISSION AND DATABASE LOGICS
@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    form = ContactForm()
    if (request.method=='POST') and form.validate_on_submit() :
        data= request.form.to_dict()
        day=datetime.datetime.now()
        date=day.strftime('%x')
        data['date']=date
        #print(date)
        full_name= data['name']
        email_address = data['email']
        existing_data=db.collection('email').get()

        for each_entry in existing_data:
            eachentry_formalised = each_entry.to_dict()

            eachentry_emailaddress = eachentry_formalised['email']
            eachentry_date = eachentry_formalised['date']
            if (eachentry_emailaddress == email_address and eachentry_date ==date):

                return render_template("emailconfirmation.html", name=full_name, form=form)

            db.collection('email').document().set(data)

            return render_template('receipt.html', name=full_name,form=form)


    else:
        return render_template("contact.html", form=form)


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)
