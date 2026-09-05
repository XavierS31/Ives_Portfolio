import resumeUrl from '../resume/summer_26_resume.pdf?url'

function ContactLinks({ showEmail = false }) {
  return (
    <div className="contact-links flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
      <a href="https://www.linkedin.com/in/ives-sanjines-iriarte-a90389360/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a href="mailto:sanjines2005@gmail.com">{showEmail ? 'sanjines2005@gmail.com' : 'Email'}</a>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="View resume PDF in a new tab">Resume ↗</a>
    </div>
  )
}

export default ContactLinks
