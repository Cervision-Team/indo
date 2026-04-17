import React, { useState } from 'react'
import './KnowTeam.scss'
import Image1 from '../../../image/Person1.jpg'
import Image2 from '../../../image/Person2.jpg'
import Image3 from '../../../image/Person3.jpg'
import Image4 from '../../../image/Person4.PNG'
import Image5 from '../../../image/Person5.jpg'
import Image6 from '../../../image/Person6.JPG'
import Image7 from '../../../image/Person7.jpg'
import Image8 from '../../../image/Person8.jpg'

const filters = [
  { id: 'all', label: 'Hamısı', count: 8 },
  { id: 'rehberlik', label: 'Rəhbərlik', count: 3 },
  { id: 'icra', label: 'İcra', count: 1 },
  { id: 'maariflendirme', label: 'Maarif & Təhsil', count: 2 },
  { id: 'sosial', label: 'Sosial İşlər', count: 2 },
]

const teamMembers = [
  {
    id: 1,
    name: 'Zöhrə Həsənova',
    department: 'Sədr',
    category: 'rehberlik',
    image: Image1,
  },
  {
    id: 2,
    name: 'Mötəbər Axundova',
    department: 'İdarə heyətinin üzvü',
    category: 'rehberlik',
    image: Image2,
  },
  {
    id: 3,
    name: 'Akifə Mövsümova',
    department: 'İdarə heyətinin üzvü',
    category: 'rehberlik',
    image: Image3,
  },
  {
    id: 4,
    name: 'Cahangir Qasımov',
    department: 'İcraçı direktor',
    category: 'icra',
    image: Image4,
  },
  {
    id: 5,
    name: 'Həsənova Qasımova Bəhriyyə',
    department: 'Maarif­ləndirmə ilə iş üzrə bölmənin rəhbəri',
    category: 'maariflendirme',
    image: Image5,
  },
  {
    id: 6,
    name: 'Sevinc Abdullayeva',
    department: 'Təhsil və ictimaiyyətlə əlaqədar iş üzrə bölmənin rəhbəri',
    category: 'maariflendirme',
    image: Image6,
  },
  {
    id: 7,
    name: 'Züleyxa Cəfərova',
    department: 'Qazi və şəhid ailələri ilə iş üzrə bölmənin rəhbəri',
    category: 'sosial',
    image: Image7,
  },
  {
    id: 8,
    name: 'Fərəh Hüseynli',
    department: 'İmkansız ailələr, uşaq və qocalar evləri ilə iş üzrə bölmənin rəhbəri',
    category: 'sosial',
    image: Image8,
  },
]

function KnowTeam() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredMembers =
    activeFilter === 'all'
      ? teamMembers
      : teamMembers.filter((m) => m.category === activeFilter)

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
                (activeFilter === filter.id
                  ? ' know-team__filter-btn--active'
                  : '')
              }
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label} <span>({filter.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="know-team__grid">
        {filteredMembers.map((member) => (
          <article key={member.id} className="know-team__card">
            <div className="know-team__image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="know-team__info">
              <h3 className="know-team__name">{member.name}</h3>
              <p className="know-team__department">{member.department}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default KnowTeam