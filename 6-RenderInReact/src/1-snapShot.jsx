import { useState } from 'react';

export default function StageShot() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 1000);
  }

  return (
    <form className='w-2/6 p-4 gap-2 border border-secondary rounded-lg flex flex-col'  onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
        className='select select-primary'
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea className="textarea textarea-primary"
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button className='btn btn-primary' type="submit">Send</button>
    </form>
  );
}
