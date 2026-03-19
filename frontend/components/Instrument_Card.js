/*仪器列表卡片（根据权限动态列）*/

import Status from './Status';
import ActionButtons from './ActionButtons';

export default function InstrumentCardList({instruments, permissions}) {
    const isAdmin = permissions.includes('edit_info');

    return (<div className="p-4">
        <h1 className="text-2xl font-bold mb-8">设备管理</h1>

        {/* 操作栏行（按钮 + 搜索框） */}
        <div className="flex items-center space-x-3 mb-6">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                新建设备
            </button>
            <input
                type="text"
                placeholder="搜索设备..."
                className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300">筛选</button>
            {permissions.includes('reserve') && (<button
                className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">预约</button>)}
        </div>

        {/* 卡片列表 */}
        <div className="grid grid-cols-1 gap-4">
            {instruments.map((inst) => (
                <div key={inst.id} className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-lg font-semibold">
                            <a href={`/instruments/${inst.id}`} className="text-blue-600 hover:underline">
                                {inst.name}
                            </a>
                        </h2>
                        <Status status={inst.status} className="text-base px-5 py-2"/>
                    </div>

                    <div className="space-y-1 text-sm text-gray-700">
                        <p><span className="font-medium">型号：</span>{inst.model}</p>
                        <p><span className="font-medium">位置：</span>{inst.location}</p>

                        {/* 管理员可见字段 */}
                        {isAdmin && (
                            <>
                                <p><span className="font-medium">购买日期：</span>{inst.purchaseDate}</p>
                                <p><span className="font-medium">供应商：</span>{inst.supplier}</p>
                            </>
                        )}
                    </div>

                    {/* 半透明分割线 */}
                    <div className="border-t border-gray-300/70 my-6"></div>

                    {/* 操作按钮 */}
                    <div className="mt-3 flex justify-end">
                        <ActionButtons instrument={inst} permissions={permissions}/>
                    </div>
                </div>))}
        </div>
    </div>);
}