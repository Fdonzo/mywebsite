
import datetime
from flask import Flask, render_template, request,redirect,url_for
#environment variable set up
from dotenv import load_dotenv
load_dotenv()
import os
import json;

import firebase_admin
#from firebase_admin import credentials
from firebase_admin import firestore


#HANDLING FLASK FORM
from flask_wtf import Form,FlaskForm
from wtforms import StringField,SubmitField
from wtforms import TextAreaField
#from wtforms.validators import DataRequired, Length
from wtforms.validators import Required


#VALIDATION class

"""
class ContactForm(Form):
    Contact form.
    name = StringField('Name', [validators.Required("Please Enter Your Name")])
    email = StringField('Email', [validators.Required("Please Enter Your Email"), validators.Email("Please A valid Email Address")])
    body = TextAreaField('Message', [validators.Length(min=5, message=('Your message is too short.'))])

    submit = SubmitField('Submit')

#VALIDATE CREDENTIALS & INITIALISATION
API_KEY = os.getenv("API_KEY")
API_KEY_FIREBASE = json.loads(API_KEY)
#print("my name", json.loads(API_KEY))
credential= credentials.Certificate(API_KEY_FIREBASE)
firebase_admin.initialize_app(credential)
db = firestore.Client()
"""
#VALIDATE CREDENTIALS & INITIALISATION
firebase_admin.initialize_app()
db = firestore.Client()
#SERVER SET_UP
app = Flask(__name__)

@app.route("/")
def my_home():
    return render_template('index.html')

@app.route("/<string:page_name>")
def html_page(page_name):
    form = ContactForm()
    if page_name=="contact.html":
        return render_template('contact.html', form=form)
    return render_template(page_name)

#EMAIL-SUBMISSION AND DATABASE LOGICS
@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    #form = ContactForm()

    if (request.method=='POST'):
        data= request.form.to_dict()
        day=datetime.datetime.now()
        date=day.strftime('%x')
        data['date'] =date
        print(date)
        full_name= data['name']
        email_address = data['email']
        existing_data=db.collection('email').get()

        for each_entry in existing_data:
            eachentry_formalised = each_entry.to_dict()
            print(eachentry_formalised)
            eachentry_emailaddress = eachentry_formalised['email']
            eachentry_date = eachentry_formalised['date']
            if (eachentry_emailaddress == email_address and eachentry_date ==date):
                print(eachentry_emailaddress)

                return render_template("emailconfirmation.html", name=full_name)
            #elif (each_entry_email_ID != email_address and each_entry_date !=date):

            db.collection('email').document().set(data)

            return render_template('receipt.html', name=full_name)

        return redirect(url('contact'))


    else:
        return render_template("contact.html")
        
"""
if __name__ =='__main__':
    server.run()
"""
