import './ApplyBlock.scss'

import { cn } from '@bem-react/classname'

const block = cn('ApplyBlock')

export function ApplyBlock(props: { showAdditionText: boolean }) {
  return (
    <div className={block()}>
      <div>
        <h3 className={block('Title')}>
          A fully funded work-study program to launch your tech career
        </h3>
        <p className={block('MainContent')}>
          Harbour.Space has partnered with SCG to empower driven talent and
          eliminate the barriers to accessing exceptional education and career
          opportunities through a Masters Fellowship.
        </p>
        {props.showAdditionText && (
          <p className={block('MainContent')}>
            Scholarship candidates will receive full financial support to
            complete their Masters program at Harbour.Space while gaining
            invaluable work experience through an internship with SCG, a leading
            company in the industry.
          </p>
        )}
      </div>

      <div>
        <p className={block('FooterText')}>
          <strong>Position: </strong> Marketing Performance
        </p>
        <button className={block('FooterButton')}>
          <p className={block('FooterButtonText')}>Apply Now</p>
        </button>
      </div>
    </div>
  )
}
