/*状态标签：根据下面四种状态显示不同的颜色*/
export default function Status({status, className = ''}) {
    const colors = {
        可用: 'bg-green-100 text-green-800',
        维修中: 'bg-yellow-100 text-yellow-800',
        报废: 'bg-red-100 text-red-800',
        停用: 'bg-gray-100 text-gray-800',
    };
    return (
        <span className={`px-2 py-1 rounded-full text-base font-medium ${colors[status]} ${className}`}>
      {status}
    </span>
    );
}