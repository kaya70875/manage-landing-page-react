import { useState } from 'react';
import '../Comments.css';
import './CommentsMobile.css';
import avatarAnisha from '../../assets/avatar-anisha.png';
import avatarAli from '../../assets/avatar-ali.png';
import avatarRichard from '../../assets/avatar-richard.png';
import avatarShanai from '../../assets/avatar-shanai.png';

export default function Comments() {
  const [activeIndex, setActiveIndex] = useState(0);

  const comments = [
    {
        name: 'Anisha Li',
        comment: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
        image: avatarAnisha
    },
    {
        name: 'Ali Bravo',
        comment: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
        image: avatarAli
    },
    {
        name: 'Richard Watts',
        comment: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
        image: avatarRichard
    },
    {
        name: 'Shanai Gough',
        comment: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
        image: avatarShanai
    }
]

  return (
    <div className="comments-wrapper">
      <header className="comments-header">
        <h2>What they've said</h2>
      </header>

      <div className="comments-card-wrapper">
        <div className="comments-card">
          <div className="comments-card-image">
            <img src={comments[activeIndex].image} alt="avatar" />
          </div>
          <div className="comments-card-name">
            <h3>{comments[activeIndex].name}</h3>
          </div>
          <div className="comments-card-comment">
            <p>{comments[activeIndex].comment}</p>
          </div>
        </div>
      </div>

      {/* Ellipse buttons for mobile */}
      <div className="ellipse-buttons">
        {comments.map((_, index) => (
          <button
            key={index}
            className={`ellipse ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <button className="primary-button">Get Started</button>
    </div>
  );
}
