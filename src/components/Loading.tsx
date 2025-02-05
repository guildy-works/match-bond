
export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-color3 mb-4"></div>
            <p className="text-lg font-semibold text-gray-700">読み込み中...</p>
            <p className="text-sm text-gray-500 mt-2">しばらくお待ちください</p>
        </div>
    );
};
