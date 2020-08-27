import React, { Component } from 'react'
import { connect } from "react-redux"
import { Alert } from "./Alert"

import { createPost, showAlert } from "../redux/actions"
 
class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
        }
    }

    submitHandler = event => {
        const { createPost, showAlert } = this.props
        event.preventDefault()

        const { title } = this.state

        if (!title.trim()) {
            showAlert("Ошибка")
            return
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        createPost(newPost)
        this.setState({
            title: "",
        })
    }

    changeInputHandler = event => {

        event.persist()
        this.setState(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}

                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text"
                     className="form-control"
                      id="title"
                      value={this.state.title }
                      onChange={this.changeInputHandler}
                      name="title"
                    />
                </div>

                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert,
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
