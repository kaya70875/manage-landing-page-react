import './Article.css';
export default function Article() {

    const cardInfo = [
        {
            id : 1,
            title: 'Track company-wide progress',
            description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        },
        {   id : 2,
            title: 'Advanced built-in reports',
            description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        },
        {   id : 3,
            title: 'Everything you need in one place',
            description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
        }
    ]    
  return (
    <article>
        <section className='article-left'>
            <header className='article-header'>
                <h2>What's diffirent about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </header>
        </section>
        <section className="article-right">
            {cardInfo.map(card => (
                <div className="card-wrapper" key={card.id}>
                    <div className="card-button">
                        <button className="secondary-button">{`0${card.id}`}</button>
                    </div>
                    <div className="card-info">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </section>
    </article>
  )
}
