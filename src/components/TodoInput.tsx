import React from 'react'

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  todo: string;
}

function TodoInput({ onSubmit }: FormProps) {
  const [formData, setFormData] = React.useState<FormData>({ todo: '' });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
    setFormData({todo: ''})
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex">
        <input value={formData.todo} type="text" name="todo" className="form-control border-right-0 shadow-none" placeholder="todo" style={{ borderRadius: '2px 0 0 2px'}} onChange={handleInputChange}/>
        <input type="submit" value="add" style={{width: '100px'}}/>
    </form>
  );
}

export default TodoInput;