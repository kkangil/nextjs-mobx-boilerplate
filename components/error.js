import Router from 'next/router'

export default () => (
  <section id="error" className="error user-body">
    <div>
      <div className="error-container">
        <p>예기치 않은 오류가 발생하였습니다.</p>
        <button
          onClick={() => Router.push('/')}
        >메인으로 가기</button>
      </div>
    </div>
  </section>
)