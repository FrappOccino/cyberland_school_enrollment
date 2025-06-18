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
        <form onSubmit={submit} className="space-y-4 max-w-md mx-auto">
        <div>
            <input
            value={data.child_name}
            onChange={e => setData('child_name', e.target.value)}
            placeholder="Child Name"
            className="w-full border p-2"
            />
            {errors.child_name && <div className="text-red-600 text-sm">{errors.child_name}</div>}
        </div>

        <div>
            <input
            type="date"
            value={data.child_birthday}
            onChange={e => setData('child_birthday', e.target.value)}
            placeholder="Child Birthday"
            className="w-full border p-2"
            />
            {errors.child_birthday && <div className="text-red-600 text-sm">{errors.child_birthday}</div>}
        </div>

        <div>
            <input
            value={data.lrn}
            onChange={e => setData('lrn', e.target.value)}
            placeholder="Learner Reference Number (LRN)"
            className="w-full border p-2"
            />
            {errors.lrn && <div className="text-red-600 text-sm">{errors.lrn}</div>}
        </div>

        <div>
            <input
            value={data.parent_name}
            onChange={e => setData('parent_name', e.target.value)}
            placeholder="Parent Name"
            className="w-full border p-2"
            />
            {errors.parent_name && <div className="text-red-600 text-sm">{errors.parent_name}</div>}
        </div>

        <div>
            <input
            value={data.parent_contact}
            onChange={e => setData('parent_contact', e.target.value)}
            placeholder="Parent Contact"
            className="w-full border p-2"
            />
            {errors.parent_contact && <div className="text-red-600 text-sm">{errors.parent_contact}</div>}
        </div>

        <div>
            <input
            type="email"
            value={data.parent_email}
            onChange={e => setData('parent_email', e.target.value)}
            placeholder="Parent Email"
            className="w-full border p-2"
            />
            {errors.parent_email && <div className="text-red-600 text-sm">{errors.parent_email}</div>}
        </div>

        <div>
            <input
            value={data.parent_relationship}
            onChange={e => setData('parent_relationship', e.target.value)}
            placeholder="Relationship to Child"
            className="w-full border p-2"
            />
            {errors.parent_relationship && <div className="text-red-600 text-sm">{errors.parent_relationship}</div>}
        </div>

        <button type="submit" disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
        </button>

        {flash.success && (
            <div className="bg-green-100 text-green-800 p-2 rounded">
                {flash.success}
            </div>
        )}
        </form>
    );
}
