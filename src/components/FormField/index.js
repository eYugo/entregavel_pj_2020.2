import React from 'react';

function FormField({ label, name, value, onChange, className }) {
    return (
        <div className={className}>
            <div className="input-group-prepend">
                <label className="input-group-text">{label}</label>
            </div>
            <input type="text" className="form-control" name={name} value={value} onChange={onChange} />
        </div>
    );
}

export default FormField;