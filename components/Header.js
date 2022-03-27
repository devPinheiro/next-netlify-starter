import Image from 'next/image';

export default function Header({ title }) {
  return (
    <div>
      <Image
        src='https://res.cloudinary.com/appnet/image/upload/v1648398672/Artboard_1_4x.png'
        alt='Nickel logo'
        width={320}
        height={450}
        layout='intrinsic'
      />
      {/* <h1 className='title'>{title}</h1> */}
    </div>
  );
}
