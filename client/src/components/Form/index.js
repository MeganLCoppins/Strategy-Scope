import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{
        marginLeft: 12,
        marginBottom: 20,
        marginTop: 20,
      }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}
