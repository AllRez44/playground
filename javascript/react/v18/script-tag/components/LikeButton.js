'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      {
        className: 'py-1 px-3 bg-black hover:opacity-80 text-white font-semibold rounded border-none cursor-pointer',
        onClick: () => this.setState({ liked: true }),
      },
      'Like'
    );
  }
}

// const domContainer = document.querySelector('#like_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));