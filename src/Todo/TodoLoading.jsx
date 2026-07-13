import React from "react"
import "./TodoLoading.css"

function TodoLoading() {
    return (
        <li className="skeleton-item">
            <div className="skeleton-circle"></div>
            <div className="skeleton-bar"></div>
            <div className="skeleton-circle"></div>
        </li>
    )
}

export { TodoLoading }

{/* <div className="LoadingTodo-container">
    <span className="LoadingTodo-CompleteIcon"></span>
    <p className="LoadingTodo-text"></p>
    <span className="LoadingTodo-deleteIcon"></span>
</div> */}