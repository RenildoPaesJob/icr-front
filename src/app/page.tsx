import Image from 'next/image'
import imgPalco from '@/assets/img/palco_jesus.svg'
import iconAspa from '@/assets/img/icon_aspas.svg'
import imgHeader from '@/assets/img/img5.jpg'
import mission from '@/assets/img/img2.jpg'
import mission2 from '@/assets/img/img3.jpg'
import event1 from '@/assets/img/img7.jpg'
import event2 from '@/assets/img/img8.jpg'
import IconSeeMore from '@/components/icon_link'

export default function Home() {
	return (
		<main>
			{/* carrusel de fotos */}
			<div className="flex text-center justify-center md:h-[740px] bg-gray-600">
				<Image src={imgHeader} alt='pessoas catandando' className='w-full h-auto object-cover' />
			</div>

			{/* about */}
			<div className='mt-20'>
				<span className="flex text-center justify-center text-[#5E6170] font-thin text-xs md:text-base">
					ABOUT CHURCH
				</span>
				<span className="flex text-center justify-center text-[#244452] font-thin md:text-2xl mt-2">
					Seek First the Kingdom of God
				</span>

				<div className='md:flex md:justify-center md:mt-6'>
					<div className="flex flex-col justify-center align-middle w-auto text-justify">

						<div className='flex p-4 md:justify-center'>
							<Image src={imgPalco} alt='pessoas catandando' className='w-auto p-4 md:p-0 h-auto md:m-0 lg:m-0 md:h-[378px] lg:h-[378px]' />
						</div>

						<div className='flex flex-col gap-4 md:flex-row mx-5 md:mx-44 md:px-16 text-[#5E6170] mt-10'>
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

						<div className='flex justify-center items-center align-middle mt-8 mb-12'>
							<button
								className='px-7 py-4 border border-[#244452] rounded-full w-fit text-[#244452] hover:bg-[#244452] hover:text-white shadow-sm shadow-gray-700'
							>
								See More
							</button>
						</div>
					</div>

				</div>
			</div>

			{/* reflection */}
			<div className='flex flex-col md:flex-row md:text-wrap text-center bg-[#001D32] w-auto h-auto p-2 md:px-28 md:py-11 align-middle mb-10 md:mb-20 justify-center'>

				<div className='flex flex-col md:flex-row gap-8 text-center justify-center md:justify-between md:min-w-full'>

					<div className='flex flex-col justify-center text-center md:max-w-2xl md:text-start'>
						<span className='text-[#abafc4] text-xs md:text-start mb-2'>
							REFLECTION
						</span>

						<span className='text-white text-2xl md:text-7xl'>God’s Word Today</span>
					</div>

					<div className='flex align-middle justify-center items-center md:mt-5 mb-4'>
						<Image src={iconAspa} alt='icon de uma aspa' className='w-10 h-10' />
					</div>

					<div className='flex flex-col text-white'>

						<div className='mb-5 md:text-end'>
							<span className='border border-white p-4 rounded-full text-center'>June 16, 2024</span>
						</div>

						<div className='flex flex-col text-justify md:w-[450px] mt-4'>
							For the desire of the flesh is death, but
							the desire of the Spirit is life and peace

							<span className='mt-2 font-thin text-end'>
								Romans 8:6
							</span>
						</div>

					</div>
				</div>

			</div>

			{/* missions */}
			<div className='px-2 md:px-28'>
				<span className="flex text-center justify-center text-[#5E6170] font-thin text-xs md:text-base">
					OUR MISSION
				</span>
				<span className="flex text-center justify-center text-[#244452] font-thin md:text-2xl mt-2">
					Vision and mission about our church
				</span>

				<div className='flex flex-row md:justify-between mt-10 md:mt-20 gap-3 md:gap-0'>
					<div className='flex flex-col md:gap-y-8'>
						<div className='mb-4 md:m-0'>
							<Image src={mission} alt='foto de uma pessao orando' className='w-[210px] h-[260px] md:w-[750px] md:h-[714px] object-cover' />
						</div>

						<div className='flex flex-col gap-y-8'>
							<span className='text-[#5E6170]'>MISSION</span>
							<span className='max-w-[750px] text-[#5E6170] md:text-5xl text-justify'>Become a Church based on the Full Gospel to take root, grow and bear fruit for Christ</span>
							<div className='flex justify-end items-center align-middle mt-8 md:mb-12'>
								<button
									className='flex md:gap-3 py-2 md:px-7 px-3 md:py-4 bg-[#244452] rounded-full w-fit text-white hover:bg-[#192e38] hover:text-white shadow-sm shadow-gray-700'
								>
									See More <IconSeeMore />
								</button>
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-y-8'>
						<div className='flex flex-col gap-y-8'>
							<span className='text-[#5E6170]'>VISION</span>
							<span className='max-w-[750px] text-[#5E6170] md:text-5xl text-justify'>Become a Church based on the Full Gospel to take root, grow and bear fruit for Christ</span>
							<div className='flex justify-end items-center align-middle md:mt-8 md:mb-12'>
								<button
									className='flex md:gap-3 py-2 md:px-7 px-3 md:py-4 bg-[#244452] rounded-full w-fit text-white hover:bg-[#192e38] hover:text-white shadow-sm shadow-gray-700'
								>
									See More <IconSeeMore />
								</button>
							</div>
						</div>

						<Image src={mission2} alt='foto de uma pessao orando' className='w-[210px] h-[276px] md:w-[750px] md:h-[714px] object-cover' />
					</div>
				</div>
			</div>

			{/* events */}
			<div className='flex flex-col justify-center align-middle items-center gap-20'>
				<hr className='w-full mt-20 border-2' />

				<div className='flex flex-col md:w-full md:flex-row md:px-28 md:justify-center gap-4 md:gap-48 p-2'>
					<div className='flex md:w-[600px] md:h-[470px]'>
						<div className='flex flex-1 flex-col bg-[#001D32] p-10 gap-8'>
							<span className='text-2xl text-[#A9AAB8]'>WEEK 01</span>

							<div className='text-white text-6xl'>
								Early Year Worship
							</div>

							<div className='text-[#A9AAB8] text-sm text-justify'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est reiciendis necessitatibus ipsum id velit doloremque. Repellat laudantium voluptate nisi eaque illum culpa qui possimus dolorem. Necessitatibus fugit hic ipsa minima.
							</div>

							<div className='flex justify-between'>
								<div className='flex flex-col'>
									<span className='text-white'>Ps. Onky Soerya</span>
									<span className='text-[#A9AAB8]'>Januari 16, 2024</span>
								</div>

								<div>
									<button
										className='flex md:gap-1 py-2 md:px-7 px-3 md:py-4 bg-[#244452] rounded-full w-fit text-white hover:bg-[#192e38] hover:text-white shadow-sm shadow-gray-700'
									>
										04:00 PM <IconSeeMore />
									</button>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-4 md:w-[106px]'>
							<div className='flex justify-center align-middle items-center'>
								<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
									<path d="M16.6667 40H63.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M50 26L64 40L50 54" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</div>
							<div className='bg-[#A9AAB8] md:h-[502px]'></div>
						</div>
					</div>

					<div className='flex flex-col text-start w-auto md:max-w-[530px] gap-5 md:gap-10 p-4 md:p-0'>
						<span className='text-[#A9AAB8]'>OUR EVENT</span>
						<span className='text-4xl md:text-6xl text-[#001D32]'>Join and Connet with us</span>
						<span className='text-[#A9AAB8] max-w-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum hic explicabo molestias molestiae? Asperiores amet, odio ratione ullam, nobis vel neque aut molestias minus accusamus, praesentium facilis quam explicabo!</span>
						<span className='text-[#001D32]'>4X - <span className='text-[#A9AAB8]'>SUNDAY WORSHIP</span></span>
						<span className='text-[#001D32]'>2X - <span className='text-[#A9AAB8]'>HOLY COMMUNICATION</span></span>
						<div>
							<button
								className='flex md:gap-1 py-2 md:px-7 px-3 md:py-4 bg-[#244452] rounded-full w-fit text-white hover:bg-[#192e38] hover:text-white shadow-sm shadow-gray-700'
							>
								Join Now <IconSeeMore />
							</button>
						</div>
					</div>
				</div>

				<hr className='w-full border-2' />
			</div>

			{/* community */}
			<div className='mt-20 md:px-28'>
				<span className="flex text-center justify-center text-[#5E6170] font-thin text-xs md:text-base">
					OUR COMMUNITY
				</span>
				<span className="flex text-center justify-center text-[#244452] font-thin md:text-5xl mt-2">
					Come join our church cell group from
					the Old to the young
				</span>

				<div className='flex flex-col md:flex-row md:px-28 justify-center md:gap-48 mt-20'>
					<div className='flex p-2 flex-col md:max-w-[550px]'>
						<div className='mb-6'>
							<Image src={event1} alt='Palco com luzes' className='w-auto h-auto md:m-0 lg:m-0 md:h-[378px] lg:h-[378px]' />
						</div>
						<span className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati necessitatibus officia consectetur nesciunt magni fuga atque mollitia ex reiciendis itaque ab eum sed temporibus exercitationem, ducimus nulla? Accusamus, quam.</span>
						<div className='flex justify-end mt-4'>
							<button
								className='flex md:gap-1 py-2 md:px-7 px-3 md:py-4 bg-[#244452] rounded-full w-fit text-white hover:bg-[#192e38] hover:text-white shadow-sm shadow-gray-700'
							>
								SAT 24, 2022 <IconSeeMore />
							</button>
						</div>
					</div>

					<div className='flex p-2 flex-col md:max-w-[550px]'>
						<div className='mb-6'>
							<Image src={event2} alt='Palco com luzes' className='w-auto h-auto md:m-0 lg:m-0 md:h-[378px] lg:h-[378px]' />
						</div>
						<span className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolore qui. Ipsa aut, recusandae, aperiam impedit possimus inventore atque cumque, consequatur quia id aliquam minima odit necessitatibus quaerat accusantium dolores.</span>
						<div className='flex justify-end mt-4'>
							<button
								className='flex md:gap-1 py-2 md:px-7 px-3 md:py-4 bg-[#244452] rounded-full w-fit text-white hover:bg-[#192e38] hover:text-white shadow-sm shadow-gray-700'
							>
								SAT 24, 2022 <IconSeeMore />
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
