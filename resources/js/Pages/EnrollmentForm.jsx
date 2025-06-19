import { useForm, usePage } from '@inertiajs/inertia-react';
import { routeUrl } from '../config';

export default function EnrollmentForm() {
    const flash = usePage().props.flash || {};

    const homeLink = routeUrl('/');

    const { data, setData, post, reset, processing, errors } = useForm({
        child_name: '',
        child_birthday: '',
        lrn: '',
        parent_name: '',
        parent_contact: '',
        parent_email: '',
        parent_relationship: '',
    });

    const submit = (e) => {
        e.preventDefault();
            post(routeUrl('enroll'), {
            onSuccess: () => {
                reset(); // <-- Clears the form fields
            },
        });
    };

    return (

        <div className="min-h-screen items-center justify-center bg-gradient-to-r from-slate-50 to-blue-300">
            <a
            href={homeLink}
            className="m-5 inline-flex items-center gap-2 bg-slate-500 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-md transition-all duration-200 disabled:opacity-50"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>

            <span>Home</span>
            </a>

            <form onSubmit={submit} className="space-y-6 w-96 mx-auto bg-white shadow-md p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-center">Enrollment Form</h2>
                <div>
                    <input
                    value={data.child_name}
                    onChange={e => setData('child_name', e.target.value)}
                    placeholder="Child Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.child_name && <div className="text-red-600 text-sm mt-1">{errors.child_name}</div>}
                </div>

                <div>
                    <input
                    type="date"
                    value={data.child_birthday}
                    onChange={e => setData('child_birthday', e.target.value)}
                    placeholder="Child Birthday"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.child_birthday && <div className="text-red-600 text-sm mt-1">{errors.child_birthday}</div>}
                </div>

                <div>
                    <input
                    value={data.lrn}
                    onChange={e => setData('lrn', e.target.value)}
                    placeholder="Learner Reference Number (LRN)"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.lrn && <div className="text-red-600 text-sm mt-1">{errors.lrn}</div>}
                </div>

                <div>
                    <input
                    value={data.parent_name}
                    onChange={e => setData('parent_name', e.target.value)}
                    placeholder="Parent Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.parent_name && <div className="text-red-600 text-sm mt-1">{errors.parent_name}</div>}
                </div>

                <div>
                    <input
                    value={data.parent_contact}
                    onChange={e => setData('parent_contact', e.target.value)}
                    placeholder="Parent Contact"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.parent_contact && <div className="text-red-600 text-sm mt-1">{errors.parent_contact}</div>}
                </div>

                <div>
                    <input
                    type="email"
                    value={data.parent_email}
                    onChange={e => setData('parent_email', e.target.value)}
                    placeholder="Parent Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.parent_email && <div className="text-red-600 text-sm mt-1">{errors.parent_email}</div>}
                </div>

                <div>
                    <input
                    value={data.parent_relationship}
                    onChange={e => setData('parent_relationship', e.target.value)}
                    placeholder="Relationship to Child"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    {errors.parent_relationship && <div className="text-red-600 text-sm mt-1">{errors.parent_relationship}</div>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-all duration-200 disabled:opacity-50"
                >
                    {processing ? 'Submitting...' : 'Submit'}
                </button>

                {flash.success && (
                    <div className="mt-4 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md">
                    {flash.success}
                    </div>
                )}
            </form>
        </div>
    );
}
