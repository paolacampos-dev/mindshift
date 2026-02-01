export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-xl font-semibold mb-2">
                User not found
            </h1>
            <p className="text-sm text-gray-600 mb-4">
                This profile does not exist.
            </p>
            <a href="/timeline" className="underline text-sm">
                Go back to Timeline
            </a>
        </main>
    );
}
