import React from 'react'
import './ServicesStrip.css'
import {
  ChefHat, Bath, HousePlus, Hammer, RectangleHorizontal, InspectionPanel,
  DoorOpen, House, Ruler, BrickWall, Grid2x2
} from 'lucide-react'

const services = [
  { label: 'Kitchens', Icon: ChefHat },
  { label: 'Bathrooms', Icon: Bath },
  { label: 'Additions', Icon: HousePlus },
  { label: 'Remodels', Icon: Hammer },
  { label: 'Decks', Icon: RectangleHorizontal },
  { label: 'Windows', Icon: Grid2x2 },
  { label: 'Doors', Icon: DoorOpen },
  { label: 'Basements', Icon: BrickWall },
  { label: 'Roofing', Icon: House },
  { label: 'Flooring', Icon: InspectionPanel },
  { label: 'Custom Builds', Icon: Ruler },
]

export default function ServicesStrip() {
  return (
    <ul className='services-strip'>
      {services.map(({ label, Icon }) => (
        <li key={label}>
          <Icon size={26} strokeWidth={1.75} aria-hidden='true' />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
