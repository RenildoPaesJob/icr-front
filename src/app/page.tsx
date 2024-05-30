import Image from 'next/image'
import imgPalco from '@/assets/img/palco_jesus.svg'
import iconAspa from '@/assets/img/icon_aspas.svg'


export default function Home() {
  return (
		<div>

			{/* carrusel de fotos */}
			<div className="flex text-center justify-center h-[600px]">
				<p>home</p>
			</div>

			{/* about */}
			<div>
				<span className="flex text-center justify-center text-[#5E6170] font-thin text-xs md:text-base">
					ABOUT CHURCH
				</span>
				<span className="flex text-center justify-center text-[#244452] font-thin md:text-2xl mt-2">
					Seek First the Kingdom of God
				</span>

				<div className="flex flex-col justify-center align-middle mt-12">
					<Image src={imgPalco} alt='pessoas catandando' className='w-auto p-4 h-auto sm:p-4 md:m-0 lg:m-0 md:h-[378px] lg:h-[378px]' />

					<div className='flex flex-col gap-4 md:flex-row mx-5 md:mx-16 text-[#5E6170] mt-10'>
						<span>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, nsectetur, adipisci velit, sed qu Ut enim ad minima veniam,
							quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Excepteur sint occaecat pidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id es Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ
						</span>
						<span>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, nsectetur, adipisci velit, sed qu Ut enim ad minima veniam,
							quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Excepteur sint occaecat pidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id es Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ
						</span>
					</div>

					<div className='flex justify-center items-center align-middle mt-10 mb-14'>
						<button className='px-7 py-4 border border-[#244452] rounded-full w-fit text-[#244452] hover:bg-[#244452] hover:text-white'>See More</button>
					</div>
				</div>
			</div>

			{/* reflection */}
			<div className='flex bg-[#001D32] w-auto p-2 md:px-28 md:py-16 justify-between align-middle mb-20'>

				<div className='flex flex-col bg-red-400'>
					<span className='text-[#5E6170]'>reflection</span>
					<span className='md:w-[381.186px] h-[128px] md:text-7xl font-semibold text-white'>God’s Word Today</span>
				</div>

				<div>
					<Image src={iconAspa} alt='pessoas catandando' className='w-8 h-8 justify-items-center align-middle md:mt-32 mt-14' />
				</div>

				<div className='text-white'>
					ok 2
				</div>
			</div>

		</div>
  );
}
