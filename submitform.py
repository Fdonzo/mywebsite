
from flask_wtf import Form, FlaskForm
from wtforms import StringField,TextAreaField,SubmitField
from wtforms.validators import InputRequired,Length, Email
#from wtforms import validators


class ContactForm(FlaskForm):

    name = StringField('Full Name:', validators=[InputRequired("Please enter your name!"), Length(min=3, max=15)])
    email = StringField('Email Address:', validators=[InputRequired("Your email address is required!"),
    Email("Enter a valid email address"),
    Length(min=6, max=35)])
    body = TextAreaField('Message:', validators=[InputRequired("Enter print your message above!"), Length(min=10, max=400)])
    submit = SubmitField('Send')
