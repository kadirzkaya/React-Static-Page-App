import React from 'react';
import contentGrow from '../img/content/illustration-grow-together.svg'
import contentFlowing from '../img/content/illustration-flowing-conversation.svg'
import contentUsers from '../img/content/illustration-your-users.svg'

function Content() {
  return (
    <div className='content textWidth mx-auto'>
      <div className="card my-5 p-5" >
        <div className="row g-0">

          <div className="col-md-6 m-auto">
            <div className="card-body">
              <h3 className="card-title">Grow Together</h3>
              <p className="card-text fw-light">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={contentGrow} className="img-fluid rounded-start" alt="content" />
          </div>
        </div>
      </div>

      <div className="card my-5 p-5" >
        <div className="row g-0">
          <div className="col-md-6">
            <img src={contentFlowing} className="img-fluid rounded-start" alt="content" />
          </div>
          <div className="col-md-6 m-auto">
            <div className="card-body">
              <h3 className="card-title">Flowing Conversations</h3>
              <p className="card-text fw-light">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="card my-5 p-5" >
        <div className="row g-0">

          <div className="col-md-6 m-auto">
            <div className="card-body">
              <h3 className="card-title">Your Users</h3>
              <p className="card-text fw-light">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={contentUsers} className="img-fluid rounded-start" alt="content" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Content