export function html({ url, text }) {
  return `  <h2>подтвердить емейл</h2>
  <p>перейдите по ссылке что бы подтвердить регистрацию</p>
    <a href=${url}>${text}</a>
    <div>${url}</div>
    `;
}
