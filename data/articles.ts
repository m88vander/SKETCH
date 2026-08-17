export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'LIFE' | 'PSYCHOLOGY' | 'WORK' | 'RELATIONSHIPS' | 'HEALTH' | 'MONEY' | 'CULTURE' | 'SKETCH'
  readingTime: number
  author: string
  date: string
  image?: string
  relatedArticles?: string[]
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'who-drew-your-life',
    title: 'Who Drew Your Life?',
    excerpt: 'A philosophical exploration of inherited expectations and the first lines of our lives.',
    category: 'SKETCH',
    readingTime: 8,
    author: 'SKETCH',
    date: '2024-01-15',
    content: `Your life started with lines you didn't draw.

Before you were born, your parents drew lines. Your family drew lines. Your culture drew lines. Your society drew lines. Your economic class, your geography, your era—all of these drew the first sketch of what your life was supposed to look like.

Some of these inherited lines are beautiful. They are lines of love, of tradition, of wisdom passed down through generations. A parent's sacrifice. A grandparent's resilience. A cultural practice that holds meaning. These lines become part of your picture, and you want to keep them.

But some of the inherited lines don't fit who you are becoming.

You might have inherited expectations about what success looks like. What a good relationship looks like. What a good person does with their time. What they care about. What they value. What they fear.

You might have inherited a picture of yourself—a role you were cast in—that doesn't match the person you're discovering yourself to be.

This is where the eraser comes in.

Zoom out and look at the whole picture. Ask: Which of these inherited lines still fit? Which ones belong in the life I want to create? Which ones am I keeping because they feel right, and which ones am I keeping because I never questioned them?

You cannot erase everything. Nor should you try. Some inherited lines are foundational. They make you who you are.

But you can examine each one. You can ask: Does this fit? And if it doesn't, you have the pencil. You can redraw it.

That's not rebellion. That's not ingratitude. That's not rejection of the people who came before you.

That's conscious examination. That's intentional living.

That's the ongoing practice of asking: Whose sketch am I living in? And whose sketch do I want to create?`,
    relatedArticles: ['2', '3'],
  },
  {
    id: '2',
    slug: 'does-it-fit',
    title: 'Does It Fit?',
    excerpt: 'Why individual decisions need to be evaluated within the larger picture.',
    category: 'LIFE',
    readingTime: 7,
    author: 'SKETCH',
    date: '2024-01-22',
    content: `A decision that looks perfect by itself can destroy the larger picture.

Consider the person who takes a high-paying job. When you zoom in on that decision, it looks brilliant. More money. Security. Status. The line looks clean.

But when you zoom out, you see it requires 60 hours a week. It requires living in a city you hate. It requires missing your children's childhood. It requires constant stress and travel and emotional exhaustion.

Now the line doesn't look clean anymore. It looks like it's crossing out other lines in your picture. Lines about family. Lines about presence. Lines about peace.

Does the decision fit? Not in the larger picture.

Or consider the relationship that feels good when you're in it. The person is kind. You have chemistry. It's comfortable. When you zoom in, it looks wonderful.

But when you zoom out, you notice the relationship requires you to hide parts of yourself. It requires compromise on values that matter to you. It requires making yourself smaller.

Does the relationship fit? Not in the larger picture.

The practice of asking "Does it fit?" is not about finding the objectively correct answer. There is no objectively correct answer.

It's about bringing conscious awareness to the relationship between the small decision and the large picture.

It's about asking: If I make this choice, what does my life become? Not financially, but actually. What does my day look like? Who am I becoming? What am I investing my irreplaceable time in?

Sometimes the answer is yes, this fits. The sacrifice is worth it because it serves the larger picture you're trying to create.

Sometimes the answer is no, this doesn't fit. And you can redraw it.

The key is asking the question in the first place.`,
    relatedArticles: ['1', '4'],
  },
  {
    id: '3',
    slug: 'the-life-you-inherited',
    title: 'The Life You Inherited',
    excerpt: 'How family, culture, work, and society draw the first lines of our lives.',
    category: 'RELATIONSHIPS',
    readingTime: 12,
    author: 'SKETCH',
    date: '2024-02-01',
    content: `You were born into a sketch that was already in progress.

Your parents had drawn lines. Their parents had drawn lines. Your culture, your country, your era, your economic circumstances—all of these had drawn lines before you ever picked up the pencil.

Some of these lines create a strong foundation. Your family taught you how to love. They taught you resilience. They taught you values. They gave you a starting picture that had beauty and meaning.

But some of these inherited lines constrain you.

Your family might have had a particular view of ambition, or success, or what a good life looks like. Your culture might have had specific expectations about gender, or family structure, or what you should value. Your class might have taught you certain beliefs about money, or education, or possibility.

These lines feel normal because they were drawn so early. You don't remember a time before them. They seem like the natural shape of the world, not like choices someone made.

But they are choices. They are lines someone drew. And now you have to decide which ones to keep.

This is not easy. Questioning inherited lines means questioning the people you love. It means potentially disagreeing with your family. It means stepping outside the picture they imagined for you.

It can feel like betrayal. It can feel ungrateful. It can feel scary.

But it is necessary.

You cannot create an authentic picture if you're just copying the one that was drawn for you.

The practice is this: Zoom in on each inherited line. Ask where it came from. Ask why it was drawn. Ask if the reason it was drawn still applies to your life.

Some lines will remain. You'll realize they match who you are, and you want to keep them.

Other lines will need to be redrawn. Not erased entirely, but reimagined for your life, your values, your circumstances.

And some lines will need to be erased completely. They don't serve you. They never served you. They were always meant for someone else.

This is the work of becoming yourself. Not rejecting where you came from, but consciously choosing which parts of the inherited picture you want to carry forward.`,
    relatedArticles: ['1', '5'],
  },
  {
    id: '4',
    slug: 'the-people-in-your-picture',
    title: 'The People in Your Picture',
    excerpt: 'How relationships shape identity and which people belong in your sketch.',
    category: 'RELATIONSHIPS',
    readingTime: 9,
    author: 'SKETCH',
    date: '2024-02-10',
    content: `You are not drawn alone.

The people around you are part of your picture. They influence the lines you draw. They draw some of the lines for you. They respond to the lines you've drawn and that response changes how you see yourself.

Some people bring out the person you're becoming. They see something in you that you couldn't see in yourself. They challenge you in ways that make you better. They support you in becoming more fully yourself. These people belong in your picture.

Other people make you smaller. They require you to hide parts of yourself. They criticize the lines you're drawing. They want you to draw yourself in a way that serves them, not you. These people might need to move to the edges of your picture, or out of it entirely.

Zoom in on each person in your picture. Ask: Does this person bring me closer to the person I want to become, or further away? Do they see me clearly, or do they see a version of me that I'm outgrowing?

This is not about judgment. A person might be wonderful in general but not right for your particular picture. A person might have been right for your picture at one time, but as you've grown and changed, they no longer fit.

This is about conscious choice.

We often keep people in our pictures out of habit, or guilt, or obligation. We don't want to disappoint them. We don't want to be alone. We don't want to admit that a relationship has changed.

But every person you include in your picture takes up space. Every relationship you maintain requires energy and time. These are precious resources. You cannot afford to spend them on people who don't belong.

Zoom out and look at the whole picture. Ask: Are the people I'm investing in helping me create the life I want? Are they people I genuinely want to be close to, or am I keeping them out of obligation?

The difficult truth is that some people will not fit in your picture. And that's okay. It doesn't make them bad. It makes them different from you.

Your job is to draw your picture. Not to include everyone. But to include the people who see you clearly and bring out the best version of yourself.

Those are the people worth keeping.`,
    relatedArticles: ['2', '6'],
  },
  {
    id: '5',
    slug: 'when-success-stops-fitting',
    title: 'When Success Stops Fitting',
    excerpt: 'What happens when an achievement no longer feels meaningful.',
    category: 'WORK',
    readingTime: 10,
    author: 'SKETCH',
    date: '2024-02-18',
    content: `You spent years drawing towards a goal.

You worked. You sacrificed. You said no to other things. You held the vision in your mind. You moved the lines inch by inch towards what you thought you wanted.

And then you achieved it.

And it felt empty.

This happens more often than people admit. The promotion that doesn't feel like success. The business that took everything and gave back anxiety. The achievement that you thought would make you feel complete but somehow made you feel more lost.

What happened?

The picture changed. You changed.

When you started drawing towards that goal, it fit your picture. It matched who you were becoming. It served a vision of yourself that felt true.

But you were drawing a moving picture. You were changing. Your values were shifting. Your understanding of what matters was deepening. Your circumstances were evolving.

By the time you reached the goal, the goal no longer fit.

This is not failure. This is the sketch.

The problem is that we're taught to achieve the goal and then maintain it forever. Get the degree, get the job, get the house, get the marriage, and then you're done. You've won. You keep these things forever because changing them means admitting you were wrong.

But life is not a destination. It's a sketch. You reach a point and then you have to ask: Does this still fit?

Sometimes the answer is yes. You achieve something and it continues to feel meaningful because it continues to match who you're becoming.

But sometimes the answer is no. The achievement no longer fits. The career path no longer serves you. The life you built no longer reflects who you are.

When this happens, you have a choice: Keep drawing the same lines out of obligation, or ask a different question.

What if you let that achievement go? What if you redesigned your work, your career, your life around what matters to you now?

This feels reckless. It feels ungrateful. It feels like failure.

But it's actually alignment.

It's asking: Does this fit? And when the answer is no, you have the pencil. You can redraw it.`,
    relatedArticles: ['2', '3'],
  },
  {
    id: '6',
    slug: 'the-line-you-keep-ignoring',
    title: 'The Line You Keep Ignoring',
    excerpt: 'The things we know aren\'t working but continue drawing anyway.',
    category: 'LIFE',
    readingTime: 7,
    author: 'SKETCH',
    date: '2024-02-25',
    content: `You know the line.

It's the thing you've been ignoring. The relationship that's slowly making you resentful. The job that's draining your energy. The habit that you know doesn't serve you. The friendship that's one-sided. The belief about yourself that's holding you back.

You know it's there. When you zoom in and look closely at it, you see exactly what's wrong. You could articulate clearly why it doesn't work. You might even have tried to fix it multiple times.

But you keep drawing it anyway.

Why?

Sometimes it's because you've invested so much in that line. You've put years into the career, the relationship, the identity. Admitting it doesn't fit means acknowledging that all that investment might have been wasted. That feels unbearable.

Sometimes it's because the alternative feels worse. At least with this line, you know what you're getting. Changing it means uncertainty. It means risk. It means starting over.

Sometimes it's because other people depend on that line. You can't redraw your career because your family depends on the money. You can't redraw the relationship because of the kids. You can't redraw your identity because of what people expect from you.

Sometimes it's because the line is so familiar that it feels like part of you. You don't know who you are without it. Erasing it feels like erasing yourself.

But here's what's true: The longer you keep drawing a line that doesn't fit, the more distorted your picture becomes.

You don't have to solve it today. You don't have to redraw everything at once. But you have to start asking the question: Why am I drawing this line? Does it fit my picture? And if it doesn't, what would it take to change it?

Sometimes the answer is that you need to keep drawing the line for now, but you make a plan to change it. You give yourself a timeline. You start preparing for the shift.

Sometimes the answer is that the line does fit, you just need to zoom out and see it in context. It's hard, but it serves the larger picture.

And sometimes the answer is that the line doesn't fit and you need to erase it, no matter how hard that is.

But you have to ask. You have to look at it directly. You can't keep pretending it's not there.

The line you keep ignoring is probably the most important line in your picture. Not because it's the most beautiful, but because it's the one that's costing you the most.

Zoom in. Look at it. Ask: Does it fit?

Then erase the pencil. Pick up the pencil.

And redraw.`,
    relatedArticles: ['1', '4'],
  },
]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getArticlesByCategory = (category: Article['category']): Article[] => {
  return articles.filter((article) => article.category === category)
}

export const getCategories = (): Array<Article['category']> => {
  const categories = new Set(articles.map((article) => article.category))
  return Array.from(categories).sort()
}
