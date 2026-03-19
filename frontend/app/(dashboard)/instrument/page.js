'use client';

import InstrumentTable from '@/components/Instrument_Card';

const MOCK_PERMISSIONS = ['view_list', 'create_asset', 'edit_info', 'apply_transfer']; // 管理员

const MOCK_INSTRUMENTS = [
    { id: 1, name: '高效液相色谱仪', location: 'A101', status: '可用', purchaseDate: '2020-01-01', supplier: '某公司' },
    { id: 2, name: '离心机', location: 'B202', status: '维修中', purchaseDate: '2019-05-01', supplier: '某公司' },
    { id: 3, name: 'PCR仪', location: 'C303', status: '停用', purchaseDate: '2021-10-01', supplier: '某公司' },
];

export default function InstrumentsPage() {
    const permissions = MOCK_PERMISSIONS;

    return (
        <div className="container mx-auto p-6">
            <InstrumentTable instruments={MOCK_INSTRUMENTS} permissions={permissions} />
        </div>
    );
}