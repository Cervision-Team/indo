import React from 'react'
import './KnowTeam.scss'

// Demo data (istəsən API-dən gələ bilər)
const filters = [
  { id: 'all', label: 'Hamısı', count: 8, active: true },
  { id: 'rehberlik', label: 'Rəhbərlik', count: 2 },
  { id: 'texnologiya', label: 'Texnologiya', count: 3 },
  { id: 'hr', label: 'İnsan resursları', count: 1 },
  { id: 'marketing', label: 'Marketing & Kommunikasiya', count: 2 },
  { id: 'design', label: 'Dizayn', count: 1 },
  { id: 'pm', label: 'Layihə idarəetməsi', count: 1 },
]

const teamMembers = [
  {
    id: 1,
    name: 'Anar Məmmədov',
    department: 'Texnologiya',
    description: 'Müasir texnologiyaları tətbiq edərək komandanın inkişafına rəhbərlik edir.',
    image: 'https://picsum.photos/seed/anar/400/400',
  },
  {
    id: 2,
    name: 'Leyla Həsənova',
    department: 'Layihə idarəetməsi',
    description: 'Mürəkkəb layihələri çevik metodlarla uğurla idarə edir.',
    image: 'https://picsum.photos/seed/leyla1/400/400',
  },
  {
    id: 3,
    name: 'Elvin Quliyev',
    department: 'Texnologiya',
    description: 'Yüksək yüklənməli sistemlər üçün dayanıqlı arxitektur qurur.',
    image: 'https://picsum.photos/seed/elvin/400/400',
  },
  {
    id: 4,
    name: 'Raşad İsmayılov',
    department: 'Texnologiya',
    description: 'İstifadəçi təcrübəsinə fokuslanmış müasir interfeyslər hazırlayır.',
    image: 'https://picsum.photos/seed/rashad/400/400',
  },
  {
    id: 5,
    name: 'Günel Əliyeva',
    department: 'Marketing & Kommunikasiya',
    description: 'Brend mesajlarının düzgün və təsirli çatdırılmasını təmin edir.',
    image: 'https://picsum.photos/seed/gunel/400/400',
  },
  {
    id: 6,
    name: 'Aydan İsmayılova',
    department: 'Dizayn',
    description: 'Vizual həllərlə brend kimliyini möhkəmləndirir.',
    image: 'https://picsum.photos/seed/aydan/400/400',
  },
  {
    id: 7,
    name: 'Teymur Həsənov',
    department: 'İnsan resursları',
    description: 'Komandanın mədəniyyətini gücləndirən insan resursları həlləri yaradır.',
    image: 'https://picsum.photos/seed/teymur/400/400',
  },
  {
    id: 8,
    name: 'Nərgiz Həsənova',
    department: 'Marketing & Kommunikasiya',
    description: 'Məhsul və xidmətləri auditoriya ilə effektiv şəkildə birləşdirir.',
    image: 'https://picsum.photos/seed/nergiz/400/400',
  },
]

function KnowTeam() {
  return (
    <section className="know-team">
      <div className="know-team__header">
        <h2 className="know-team__title">Bizimlə Tanış Olun</h2>
        <p className="know-team__subtitle">
          Hər biri öz sahəsində peşəkar olan komanda üzvlərimiz
        </p>

        <div className="know-team__filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={
                'know-team__filter-btn' +
                (filter.active ? ' know-team__filter-btn--active' : '')
              }
            >
              {filter.label} <span>({filter.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="know-team__grid">
        {teamMembers.map((member) => (
          <article key={member.id} className="know-team__card">
            <div className="know-team__image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="know-team__info">
              <h3 className="know-team__name">{member.name}</h3>
              <p className="know-team__department">{member.department}</p>
              <p className="know-team__desc">{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default KnowTeam
