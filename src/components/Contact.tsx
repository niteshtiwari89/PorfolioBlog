import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dropdown: "",
        message: "",
        access_key: "ff9bca6e-8acb-424c-af55-f06e4074b8ac",
    });

    const [result, setResult] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setResult(true)
        // Define the recipient email based on the dropdown value
        let recipientEmail = '';
        if (formData.dropdown === 'philanthropy') {
            recipientEmail = 'lalatiwari086@gmail.com';  // Philanthropy email
        } else if (formData.dropdown === 'investor') {
            recipientEmail = 'tiwarinitesh667@gmail.com'; // Investor email
        } else if (formData.dropdown === 'business') {
            recipientEmail = 'tiwarinitesh667@gmail.com'; // Business email
        } else if (formData.dropdown === 'contact') {
            recipientEmail = 'tiwarinitesh667@gmail.com'; // Contact email
        }

        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('dropdown', formData.dropdown);
        form.append('message', formData.message);
        form.append('access_key', formData.access_key);
        form.append('recipientEmail', recipientEmail);

        // Send the form data using Web3Forms or any backend service
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Form Submitted Successfully')
                setFormData({
                    ...formData,
                    name: '',
                    email: '',
                    dropdown: '',
                    message: ''
                });
                setResult(false);
                // event.target.reset();
            } else {
                console.log("Error", data);
                toast.error('Failed to Submit Data')
            }// Close the modal
        } catch (error) {
            toast.error('Error Submit Data')
            console.log('Error submitting form. Please try again.', error);
        } finally {
            setResult(false);
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="p-8 w-full sm:w-96">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <label
                            htmlFor="dropdown"
                            className="block mb-2 text-sm font-medium"
                        >
                            Topic of Interest
                        </label>
                        <select
                            id="dropdown"
                            name="dropdown"
                            value={formData.dropdown}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select a Topic</option>
                            <option value="philanthropy">Philanthropy</option>
                            <option value="investor">Investor/Angel Investor</option>
                            <option value="business">Business</option>
                            <option value="contact">Contact</option>
                        </select>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium"
                        >
                            Comments
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            required
                        />
                        <button
                            type="submit"
                            disabled={result}
                            className={`w-full p-2 ${result ? "bg-gray-500" : "bg-blue-500"} rounded hover:bg-blue-600`}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
