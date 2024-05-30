
export function Navbar() {
	return (
		<nav className="flex flex-row h-20 p-3 md:px-8 justify-between items-center">
			<span className="font-thin text-2xl">ICR</span>

			<div className="flex md:gap-4 gap-2">
				<span>Início</span>
				<span>Eventos</span>
				<span>Estudos</span>
				<span>Nossa História</span>
				<span>Contato</span>
			</div>
		</nav>
	)
}