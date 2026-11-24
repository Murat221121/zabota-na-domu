import React from 'react';

export function VisitsTable() {
  const visits = [
    { id: 1, worker: 'Смирнова А.В.', ward: 'Иванова М.П.', status: 'Выполнил' },
    { id: 2, worker: 'Козлов Д.И.', ward: 'Петров С.Н.', status: 'SOS' },
  ];

  return (
    <table className="min-w-full border text-lg">
      <thead>
        <tr>
          <th>Соцработник</th>
          <th>Подопечный</th>
          <th>Статус визита</th>
        </tr>
      </thead>
      <tbody>
        {visits.map((v) => (
          <tr key={v.id}>
            <td>{v.worker}</td>
            <td>{v.ward}</td>
            <td>{v.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
