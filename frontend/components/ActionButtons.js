/*行内操作按钮{编辑（修改状态）、高级筛选（显示详情）}*/

import Link from 'next/link';

export default function ActionButtons({instrument, permissions}) {
    const canEdit = permissions.includes('edit_info');

    return (
        <div className="flex gap-2 justify-end whitespace-nowrap flex-nowrap">

            {canEdit && (
                <Link href={`/instruments/`} className="text-blue-500 hover:underline">
                    高级筛选
                </Link>
            )}


            {canEdit && (
                <Link href={`/instruments/`} className="text-blue-500 hover:underline">
                    编辑
                </Link>
            )}

        </div>
    );
}