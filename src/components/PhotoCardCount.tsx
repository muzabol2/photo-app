interface Props {
   count: number;
}

export function PhotoCardCount({ count }: Props) {
   return <p className="mb-8">
      You have <span className="text-2xl font-semibold">{count}</span> images in your gallery!
   </p>;
}
