import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Gift,
  Heart,
  Mail,
  SmilePlus,
} from 'lucide-react';

const girlName = 'Anchal';
const senderName = 'Mohit';

const loveLetters = [
  {
    id: 'heavy',
    title: 'When Your Day Feels Heavy',
    body:
      "Hey Anchal,\n\nI don't know exactly what kind of day you're having, but I hope you remember that you don't need to figure everything out at once.\n\nIt's okay to pause. It's okay to feel tired. And it's okay to give yourself some time.\n\nYou deserve the same kindness and care that you give to the people around you.\n\nTake a deep breath, relax a little, and remember that one difficult day doesn't define you. Sending you a little virtual hug. 🤍",
  },
  {
    id: 'compliment',
    title: 'A Secret Compliment for You',
    body:
      "Anchal, can I tell you something?\n\nYour eyes are honestly one of the first things that come to mind when I think of what makes you special. There's something about them that I find genuinely charming.\n\nAnd beyond that, I hope you know that you don't need to do anything extraordinary to deserve appreciation.\n\nSometimes, simply being yourself is more than enough. ❤️",
  },
  {
    id: 'reminder',
    title: 'Just a Little Reminder',
    body:
      "Dear Anchal,\n\nThis is your gentle reminder that your worth isn't measured by your grades, your workload, your responsibilities, or how much you manage to finish in a day.\n\nYou're allowed to have slow days. You're allowed to rest. And you're allowed to put yourself first sometimes.\n\nI hope tomorrow feels a little lighter and gives you more reasons to smile.\n\nUntil then, take care of yourself, okay? 🌷",
  },
];

const smileMessages = [
  'Anchal, this is your official permission to take a break. Signed: Mohit, Department of Unnecessary Cuteness. 😂',
  'Your to-do list called. I told it you were busy being adorable. 💗',
  'Breaking news: A very special girl deserves a very peaceful day. 📰❤️',
  'Reminder: Even the prettiest eyes need proper rest. Go give those eyes a screen break! 👀🌷',
  'Anchal, please stop being so effortlessly charming. Some of us are trying to concentrate. 😂',
  "Today's tiny mission: drink water, take a breath, and be a little kinder to yourself. 💧",
  'If smiles were stars, I hope your sky gets a little brighter tonight. ✨',
  'Sending one virtual hug, two happy thoughts, and a thousand tiny hearts. 🫂',
  "You're allowed to rest without earning it first. 🤍",
  'May your stress decrease and your favourite snacks magically appear. 🍫',
  "Mohit's tiny reminder: you matter, even on your hardest days. ❤️",
  'A little smile looks good on you, Anchal — but no pressure, okay? 🥹',
];

const feelings = [
  {
    id: 'better',
    label: 'Feeling a little better 💗',
    response: 'That makes me happy, Anchal. Keep taking things one step at a time. 🌸',
  },
  {
    id: 'stressed',
    label: 'Still a bit stressed 🤍',
    response: "That's okay. You don't have to feel better immediately. Be gentle with yourself. 🫂",
  },
  {
    id: 'funny',
    label: 'I need something funny 😂',
    response: 'Comedy department reporting for duty! Head back to the smile machine for another surprise. 😂',
  },
  {
    id: 'talk',
    label: 'I feel like talking 💌',
    response: "If you'd like to talk, Mohit would be happy to listen. No pressure to share anything you're not comfortable with. ❤️",
  },
];

function App() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [openedLetters, setOpenedLetters] = useState({});
  const [giftOpen, setGiftOpen] = useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [smileHistory, setSmileHistory] = useState([]);
  const [currentSmile, setCurrentSmile] = useState('');

  const openLetter = (letterId) => {
    setOpenedLetters((prev) => ({ ...prev, [letterId]: !prev[letterId] }));
  };

  const revealSmile = () => {
    const remaining = smileMessages
      .map((message, index) => ({ message, index }))
      .filter(({ index }) => !smileHistory.includes(index));

    if (!remaining.length) {
      setSmileHistory([]);
      setCurrentSmile(smileMessages[0]);
      return;
    }

    const chosen = remaining[Math.floor(Math.random() * remaining.length)];
    setCurrentSmile(chosen.message);
    setSmileHistory((prev) => [...prev, chosen.index]);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page-shell">
      {isWelcomeOpen && (
        <div className="floating-hearts" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className="floating-heart" style={{ '--i': index }} />
          ))}
        </div>
      )}

      {!isWelcomeOpen && (
        <section className="welcome-screen">
          <div className="envelope-card">
            <div className="envelope-wrapper">
              <div className="envelope-top" />
              <div className="envelope-body">
                <div className="heart-badge">
                  <Heart size={18} fill="currentColor" />
                </div>
                <p className="eyebrow">A tiny surprise for you</p>
                <h1>Hey, {girlName}! 🥹❤️</h1>
                <p className="welcome-subtext">I made something little and special for you.</p>
                <p className="supporting-message">
                  Because even when life gets a little overwhelming, you deserve a moment that feels soft,
                  peaceful, and full of warmth.
                </p>
                <button type="button" className="primary-button" onClick={() => setIsWelcomeOpen(true)}>
                  Open Your Surprise, {girlName} 💌
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <AnimatePresence>
        {isWelcomeOpen && (
          <motion.main
            key="content"
            className="content-shell"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <section className="hero-section" id="top">
              <div className="hero-glow" aria-hidden="true" />
              <div className="hero-copy">
                <p className="eyebrow">For {girlName}, with love</p>
                <h2>{girlName}, You Have the Most Beautiful Eyes ✨</h2>
                <div className="hero-text">
                  <p>Hey {girlName} ❤️</p>
                  <p>
                    You know what? There&apos;s something about your eyes that I find really beautiful.
                  </p>
                  <p>
                    Maybe it&apos;s the way they express things without saying a word, or maybe it&apos;s simply
                    that they have a charm of their own.
                  </p>
                  <p>
                    I don&apos;t know how to explain it perfectly, but some little things about a person just
                    stay in your mind, and your eyes are one of those things for me. 🥹💗
                  </p>
                  <p>
                    And today, when life might be feeling a little overwhelming, I just wanted to remind you
                    that you&apos;re appreciated for more than what you do, how much you achieve, or how strong
                    you try to be.
                  </p>
                  <p>You&apos;re special just as you are.</p>
                </div>
                <div className="hero-actions">
                  <button type="button" className="secondary-button" onClick={() => scrollToSection('letters')}>
                    <Mail size={16} /> A Little Love Letter for Me? 💌
                  </button>
                  <button type="button" className="primary-button" onClick={() => scrollToSection('smile')}>
                    <SmilePlus size={16} /> Make Me Smile 😊
                  </button>
                </div>
              </div>
              <motion.div
                className="eye-card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="eye-art" aria-hidden="true">
                  <div className="eye-shape">
                    <span className="pupil" />
                  </div>
                  <div className="sparkle sparkle-one">✦</div>
                  <div className="sparkle sparkle-two">✦</div>
                </div>
                <Heart className="heart-float" size={26} fill="currentColor" />
              </motion.div>
            </section>

            <section id="letters" className="content-section">
              <div className="section-heading">
                <p className="eyebrow">Little notes</p>
                <h3>Three Little Love Letters 💌</h3>
              </div>

              <div className="letters-grid">
                {loveLetters.map((letter, index) => (
                  <motion.article
                    key={letter.id}
                    className={`letter-card ${openedLetters[letter.id] ? 'opened' : ''}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index }}
                  >
                    <button type="button" className="letter-envelope" onClick={() => openLetter(letter.id)}>
                      <span className="envelope-label">Open letter</span>
                      <Mail size={18} />
                    </button>

                    <AnimatePresence initial={false}>
                      {openedLetters[letter.id] && (
                        <motion.div
                          key="letter-content"
                          className="letter-content"
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="letter-header">
                            <span>{letter.title}</span>
                            <Heart size={14} fill="currentColor" />
                          </div>
                          <p>{letter.body}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                ))}
              </div>
            </section>

            <section id="smile" className="content-section smile-section">
              <div className="section-heading centered">
                <p className="eyebrow">Tiny joy</p>
                <h3>{girlName}&apos;s Tiny Smile Machine</h3>
                <p className="section-description">Feeling a little stressed? Let&apos;s try to steal one tiny smile.</p>
              </div>

              <button type="button" className="primary-button large" onClick={revealSmile}>
                Click for a Cute Surprise ✨
              </button>

              <AnimatePresence mode="wait">
                {currentSmile && (
                  <motion.p
                    key={currentSmile}
                    className="smile-message"
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    {currentSmile}
                  </motion.p>
                )}
              </AnimatePresence>
            </section>

            <section id="gift" className="content-section gift-section">
              <div className="section-heading centered">
                <p className="eyebrow">A little something</p>
                <h3>A Little Something Just for You</h3>
              </div>

              <button type="button" className="primary-button large" onClick={() => setGiftOpen((prev) => !prev)}>
                <Gift size={18} /> {giftOpen ? 'Close the Gift' : 'Open Your Gift, Anchal 🎀'}
              </button>

              <AnimatePresence>
                {giftOpen && (
                  <motion.div
                    className="gift-card"
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p>
                      If I could give you one little gift today, {girlName}, it would be a peaceful mind, a
                      lighter heart, and a reason to smile.
                    </p>
                    <p>
                      I wish I could make every stressful thing disappear, but I know life doesn&apos;t work that
                      way.
                    </p>
                    <p>
                      So instead, I made this tiny corner of the internet for you — filled with a few kind
                      words, silly surprises, and a reminder that someone is thinking of you.
                    </p>
                    <p>I hope it makes your day just a little better. ❤️</p>
                    <p className="signature-line">With care,<br />{senderName} 💌</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            <section id="check-in" className="content-section">
              <div className="section-heading centered">
                <p className="eyebrow">Gentle check-in</p>
                <h3>{girlName}, How Are You Feeling?</h3>
              </div>

              <div className="checkin-grid">
                {feelings.map((feeling) => (
                  <button
                    key={feeling.id}
                    type="button"
                    className={`selection-button ${selectedFeeling === feeling.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFeeling(feeling.id)}
                  >
                    {feeling.label}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {selectedFeeling && (
                  <motion.div
                    className="checkin-response"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {feelings.find((feeling) => feeling.id === selectedFeeling)?.response}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            <section id="final-note" className="content-section final-section">
              <div className="final-envelope" aria-hidden="true">
                <div className="final-envelope-top" />
                <div className="final-envelope-body" />
              </div>

              <div className="section-heading centered">
                <p className="eyebrow">One last thing</p>
                <h3>One Last Thing, {girlName}... ❤️</h3>
              </div>

              <motion.div
                className="final-note-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>{girlName},</p>
                <p>
                  I don&apos;t know whether this little website can make all your worries disappear, but I hope it
                  reminds you to take a moment for yourself.
                </p>
                <p>
                  You don&apos;t always have to be strong, productive, or cheerful. You can simply be you.
                </p>
                <p>And yes, I still think your eyes are really beautiful. 🥹💗</p>
                <p>
                  I hope you get a peaceful moment today, something that makes you laugh, and plenty of reasons
                  to feel lighter, loved, and at peace.
                </p>
                <p>Take care of yourself, {girlName}.</p>
                <p>And if this little surprise made you smile even for a second, then {senderName}&apos;s mission is accomplished. 😊❤️</p>
                <p className="final-signoff">
                  Made with a little extra care, just for you.
                  <br />
                  — {senderName} 💌
                </p>
                <div className="heart-divider">
                  <Heart size={18} fill="currentColor" />
                </div>
              </motion.div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
