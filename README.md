# Dev Stack Builder

A modern, interactive web application that lets developers explore and build their ideal technology stack. Browse through curated tools and technologies, compare them side by side, and put together the stack that fits your next project.

---

## Live Site

🔗 [Live Demo](https://programming-hero-assignment-5-gamma.vercel.app/)

---

## 🛠️ Technologies Used

- **React.js** — Component-based UI library
- **TypeScript** — Strongly typed JavaScript
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind CSS component library
- **Vite** — Fast build tool and dev server
- **React-Toastify** — Toast notification library
- **JSON** — Local data source for technology list

---

## ✨ Key Features

1. ** Interactive Tech Cards** — Browse 15 technologies with icons, badges, ratings, difficulty levels, and categories. Each card dynamically updates when added to your stack.

2. ** Your Stack Sidebar** — Build your personal dev stack in real time. Add technologies, see them appear instantly in the sidebar, and remove individual items or clear everything at once.

3. ** Toast Notifications** — Get instant feedback for every action — adding a tech, trying to add a duplicate, removing an item, or clearing the entire stack — powered by React-Toastify.

---

## 📂 Project Structure

```
src/
├── Components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechSection.tsx
│   ├── TechCard.tsx
│   ├── StackSidebar.tsx
│   ├── Footer.tsx
│   └── Loader.tsx
├── Types/
│   └── techType.ts
├── App.tsx
├── main.tsx
└── index.css
public/
└── data.json
```

---

## ❓ React Concepts — Q&A

### 1. What is JSX, and why is it used in React?

JSX হলো JavaScript-এর একটি syntax extension, যার মাধ্যমে আমি JavaScript-এর মধ্যে HTML-এর মতো code লিখতে পারি।

আমি React-এ JSX ব্যবহার করি, কারণ এর মাধ্যমে UI-এর structure সহজে লেখা যায় এবং code দেখতে পরিষ্কার ও readable হয়।

সহজভাবে বললে, JSX আমাকে JavaScript-এর সঙ্গে HTML-এর মতো structure একসাথে লেখার সুবিধা দেয়।


---

### 2. What is the difference between props and state?

props আর state দুটোই data রাখার জন্য ব্যবহার হয়, কিন্তু তাদের কাজ আলাদা।

Props :
------------------------------

Props হলো parent component থেকে child component-এ data পাঠানোর একটা উপায়।

মানে, আমার যদি একটা parent component থাকে এবং সেখান থেকে child component-এ কোনো তথ্য পাঠাতে চাই, তখন আমি props ব্যবহার করি।

function App() {
  return <Profile name="Shanto" />;
}

এখানে name="Shanto" হলো prop।

Child component সেটা ব্যবহার করতে পারে, কিন্তু সাধারণভাবে child component নিজে থেকে prop-এর value পরিবর্তন করতে পারে না।



State :
-------------------------------
State হলো component-এর নিজের data, যেটা সময়ের সাথে পরিবর্তন হতে পারে।

যেমন counter:

const [count, setCount] = useState(0);

এখানে count হলো state।

আমি button click করলে:

setCount(count + 1);

state-এর value পরিবর্তন হবে, আর React UI আবার render করবে।


মূল পার্থক্য :
-------------------------------
Props:

 1. Parent থেকে data আসে

 2. Child সাধারণত পরিবর্তন করে না

 3. Data pass করার জন্য ব্যবহার হয়

 4. Read-only হিসেবে ধরা হয়


State:

  1. Component-এর নিজের data
  
  2. Component নিজে update করতে পারে

  3. Dynamic data manage করার জন্য ব্যবহার হয়

  4. পরিবর্তন করা যায়

---

### 3. What does the `useState` hook do, and where did you use it in this project?

useState হলো React-এর একটি Hook, যেটা দিয়ে আমি component-এর এমন data রাখতে পারি 
যেটা পরে পরিবর্তন হতে পারে।

useState = data রাখা + data পরিবর্তন করা + পরিবর্তনের পর UI আবার update করা।

এটা দুটো জিনিস দেয়:

const [count, setCount] = useState(0);

count - বর্তমান value
setCount - value পরিবর্তন করার function
useState(0)  - initial value

আমি যখন setCount দিয়ে value পরিবর্তন করি, React component-টাকে আবার 
render করে এবং updated UI দেখায়।

---এই project-এ কোথায় ব্যবহার করেছি?---

আমি এই project-এর TechSection.tsx component-এ useState ব্যবহার করেছি:

const [stack, setStack] = useState([]);

এখানে stack হলো সেই array যেটায় user যেসব technology "Add to Stack" 
button দিয়ে select করে সেগুলো রাখা হয়।

user যখন কোনো card-এ "Add to Stack" click করে, আমি setStack দিয়ে 
নতুন technology-টা stack-এ add করি। React তখন UI আবার render করে 
এবং sidebar-এ নতুন item দেখায়।

একইভাবে remove করার সময়ও setStack ব্যবহার করে stack update করি।


---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

useEffect হলো React-এর একটি Hook, যেটা দিয়ে আমি component render 
হওয়ার পরে কোনো কাজ করাতে পারি। যেমন — data fetch করা, timer set করা, 
বা browser-এর কোনো কিছু update করা।


---এই project-এ কী ব্যবহার করেছি?---

আমার এই project-এ আমি useEffect-এর বদলে React-এর নতুন 
use() hook এবং Suspense ব্যবহার করেছি।

App.tsx-এ একটা Promise তৈরি করেছি:

const techPromise = async () => {
  const res = await fetch('/data.json');
  return res.json();
};

তারপর TechSection.tsx-এ use() দিয়ে সেই Promise resolve করেছি:

const techs = use(techPromise);

আর App.tsx-এ Suspense দিয়ে loading state দেখিয়েছি:

<Suspense fallback={<Loader />}>
  <TechSection techPromise={techPromise()} />
</Suspense>

এটা useEffect-এর চেয়ে আধুনিক পদ্ধতি — data load 
না হওয়া পর্যন্ত Loader spinner দেখায়, 
load হয়ে গেলে TechSection render হয়।



---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React-এ .map() দিয়ে লিস্ট তৈরি করার সময় প্রতিটা item-এ 
একটা unique `key` দেওয়া বাধ্যতামূলক।

কারণ:
React `key` ব্যবহার করে বুঝতে পারে লিস্টের কোন item-টা নতুন এসেছে, 
কোনটা রিমুভ হয়েছে, আর কোনটা আপডেট হয়েছে। 

যদি `key` না দিই, তাহলে React ঠিকমতো track করতে পারে না। 
ফলে সে পুরো লিস্টটাকে আবার নতুন করে render করে, যা পারফরম্যান্সের 
জন্য খারাপ। এছাড়া UI-তে উল্টাপাল্টা বাগ (bug) দেখা দিতে পারে।

তাই আমরা index-এর বদলে ডেটার কোনো unique আইডি (যেমন: `id`) 
key হিসেবে ব্যবহার করি। যদি ডেটার মধ্যে কোনো id বা unique কিছু না থাকে, তখন আমরা বাধ্য হয়ে map()-এর index-কে key হিসেবে ব্যবহার করি।

---আমার project-এ উদাহরণ---

TechSection.tsx-এ আমি এভাবে key ব্যবহার করেছি:

{techs.map((tech) => (
  <TechCard key={tech.id} tech={tech} />
))}

এখানে tech.id হলো unique key, যা প্রতিটা technology-র জন্য আলাদা।


---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering মানে হলো কোনো শর্তের (condition) ওপর ভিত্তি 
করে UI-তে ভিন্ন ভিন্ন জিনিস দেখানো। এটা JavaScript-এর if-else 
বা ternary operator (? :)-এর মতো কাজ করে।


---কোথায় ব্যবহার করেছি?---

আমার project-এর StackSidebar.tsx-এ আমি conditional rendering 
ব্যবহার করেছি। যখন user-এর stack খালি থাকে, তখন আমি "Your stack is empty" 
দেখাই, আর যখন stack-এ data থাকে, তখন card-গুলো দেখাই:
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div className="">
    {stack.map((tech) => ( ... ))}
  </div>
)}

এখানে stack.length === 0 হলো condition।


---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?


React-এ component-গুলোর মধ্যে data পাস করার নির্দিষ্ট নিয়ম আছে:

1. Parent থেকে Child-এ data পাঠানো হয় `props` ব্যবহার করে। 
Parent component যখন child-কে কল করে, তখন HTML attribute-এর মতো 
করে data পাঠিয়ে দেয়। 

2. Child সরাসরি Parent-কে data পাঠাতে পারে না। এর জন্য Parent 
একটা function তৈরি করে সেটাকে `props` হিসেবে Child-এর কাছে পাঠায়। 
Child তখন সেই function-টাকে কল করে এবং ভেতরে parameter হিসেবে 
data পাঠিয়ে দেয়।


---আমার project-এ উদাহরণ---

আমার প্রজেক্টে Parent হলো `TechSection` এবং Child হলো `TechCard`।
আমি TechSection থেকে `handleAdd` নামের একটা function 
`onAdd` prop হিসেবে TechCard-এ পাঠিয়েছি:

// Parent (TechSection.tsx)
<TechCard onAdd={handleAdd} />

তারপর Child component-এ (TechCard.tsx) বাটন ক্লিক করার সময় 
সেই function-টাকে কল করে `tech` ডেটাটা Parent-এর কাছে পাঠিয়ে দিয়েছি:

// Child (TechCard.tsx)
<button onClick={() => onAdd(tech)}>Add to Stack</button>

এভাবে Child component থেকে Parent component-এ ডেটা যায়।