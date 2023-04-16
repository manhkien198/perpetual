export function Badge({
  icon,
  title,
  active,
  reverse,
}: {
  icon: string;
  title: string;
  active?: boolean;
  reverse?: boolean;
}) {
  return (
    <div
      className={`py-3 px-6 ${
        active ? 'badge-purple' : 'gray-bg'
      } rounded-3xl flex justify-center items-center gap-2 ${
        reverse ? 'flex-row-reverse' : ''
      }`}
    >
      <img src={icon} alt='icon' />
      <p className='text-white'>{title}</p>
    </div>
  );
}
