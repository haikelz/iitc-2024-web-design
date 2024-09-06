export default function App() {
	return (
		<>
			<header className="flex justify-between items-center px-20 py-10">
				<a href="">Logo</a>
				<ul className="flex font-semibold gap-5">
					<li>Home</li>
					<li>Features</li>
					<li>About</li>
					<li>FAQ</li>
					<li>Contact</li>
				</ul>
				<a href="" className="bg-green-400 rounded-full px-5 py-2">Login</a>
			</header>
			<main className="w-full flex flex-col justify-center items-center">
				<h1 className="font-bold text-7xl pt-20">Smart Learning</h1>
				<h1 className="font-bold text-7xl">Achieving Briliant Achievements</h1>
				<h3 className="pt-5 text-2xl">
					Achieve Briliant Achievements with Interactive Quizzes and Discussions
				</h3>
				<div className="flex pt-10 gap-5">
					<input type="text" placeholder="Find your needs" className="border pl-5 w-96 h-10 border-black rounded-full" />
					<button className=" bg-green-400 rounded-full px-5">Search</button>
				</div>
				<section className="grid grid-cols-3 gap-10 my-10">
					<div className="flex flex-col p-5">
						<img src="https://picsum.photos/id/237/200/300" alt="" width={50} />
						<h4 className="font-semibold text-xl">Lorem Ipsum</h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed?</p>
					</div>
					<div className="border-x-4 border-spacing-x-5 flex flex-col p-5">
						<img src="https://picsum.photos/id/237/200/300" alt="" width={50} />{" "}
						<h4 className="font-semibold text-xl">Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed?</p>
					</div>
					<div className="flex flex-col p-5">
						<img src="https://picsum.photos/id/237/200/300" alt="" width={50} />{" "}
						<h4 className="font-semibold text-xl">Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed?</p>
					</div>
				</section>
			</main>
		</>
	)
}
