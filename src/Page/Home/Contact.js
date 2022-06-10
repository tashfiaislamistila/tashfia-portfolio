import React from 'react';
import emailjs from "emailjs-com"
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_elksewd', 'template_qxubn3w', form.current, '05NbpC7pPFq2OQmEd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Contact ME!</h1>
                    <p class="py-6 text-2xl text-primary">If you need any help feel free to Contact with me.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Text</span>
                                </label>
                                <textarea class="textarea textarea-info" name='text' placeholder="Text"></textarea>
                                {/* <input type="text" placeholder="text" class="input input-bordered" /> */}
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Send Email</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;