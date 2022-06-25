import React from 'react';
import './App.scss';

export class App extends React.Component {
  state = {
    sex: 'men',
    comment: '',
    username: '',
    password: '',
    remember: false,
    color: '',
  };

  handlerChange = (event: React.ChangeEvent<
  HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement
  >) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    // eslint-disable-next-line no-console
    console.log(value);

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{ padding: '20px' }}
      >
        <h1>Mate</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            // eslint-disable-next-line no-console
            console.log(this.state);
          }}
        >
          <div>
            <label htmlFor="sex_m">
              <input
                type="radio"
                name="sex"
                id="sex_m"
                value="men"
                onChange={this.handlerChange}
                checked={this.state.sex === 'men'}
              />
              Male
            </label>

            <label htmlFor="sex_f">
              <input
                type="radio"
                name="sex"
                id="sex_f"
                value="female"
                onChange={this.handlerChange}
                checked={this.state.sex === 'female'}
              />
              Female
            </label>
          </div>

          <select
            name="color"
            id=""
            value={this.state.color}
            onChange={this.handlerChange}
          >
            <option value="">Choose a color</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
          <br />

          <label
            htmlFor="remember"
          >
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={this.state.remember}
              onChange={this.handlerChange}
            />
            Remember me
          </label>
          <br />

          <textarea
            name="comment"
            value={this.state.comment}
            onChange={this.handlerChange}
          />
          <br />

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handlerChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handlerChange}
          />
          <br />

          <button
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
