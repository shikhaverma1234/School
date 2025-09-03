import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from '../styles/form.module.css';

export default function SchoolForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email);

    await fetch('/api/addSchool', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label>Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>Address</label>
        <input {...register('address', { required: true })} />
        {errors.address && <span>This field is required</span>}
      </div>
      <div>
        <label>City</label>
        <input {...register('city', { required: true })} />
        {errors.city && <span>This field is required</span>}
      </div>
      <div>
        <label>State</label>
        <input {...register('state', { required: true })} />
        {errors.state && <span>This field is required</span>}
      </div>
      <div>
        <label>Contact</label>
        <input type="number" {...register('contact', { required: true })} />
        {errors.contact && <span>This field is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Image</label>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button type="submit">Add School</button>
    </form>
  );
}