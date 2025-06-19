import { useForm, usePage } from '@inertiajs/inertia-react';
import { routeUrl } from '../config';

export default function EnrollmentForm() {
    const flash = usePage().props.flash || {};

    const { data, setData, post, processing, errors } = useForm({
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
        post(routeUrl('enroll'));
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-50 to-blue-300">
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
