export function Messsage({ message }: { message?: string }) {
  return message
    ? (
      <div className="text-center text-gray-700 dark:text-gray-200">
        <p className="text-lg">{message}</p>
      </div>
    )
    : null;
}