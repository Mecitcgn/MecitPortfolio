import { useState } from 'react';
import { ACHIEVEMENTS } from '../../data';
import { TagGray } from '../ui/Typography';

/**
 * Achievements — accordion tabanlı başarı listesi.
 * Stiller globals.css içinde tanımlıdır.
 */

export default function Achievements() {
	const [open, setOpen] = useState(null);
	const toggle = (id) => setOpen(open === id ? null : id);

	return (
		<div>
			{ACHIEVEMENTS.map((group) => (
				<div key={group.id} className="acc-item">
					<button className="acc-btn" onClick={() => toggle(group.id)}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
							<span
								style={{
									fontFamily: "'DM Mono', monospace",
									fontSize: 16,
									color: 'var(--acc)',
								}}
							>
								{group.icon}
							</span>
							<span
								style={{
									fontFamily: "'Bebas Neue', sans-serif",
									fontSize: 26,
									letterSpacing: '.03em',
									color: 'var(--t)',
								}}
							>
								{group.title}
							</span>
							<TagGray>{group.items.length}</TagGray>
						</div>
						<span
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: 18,
								color: 'var(--t2)',
								transform: open === group.id ? 'rotate(45deg)' : 'none',
								transition: 'transform .3s',
								display: 'inline-block',
							}}
						>
							+
						</span>
					</button>

					<div className={`acc-body${open === group.id ? ' open' : ''}`}>
						<div style={{ paddingBottom: 20 }}>
							{group.items.map((item, i) => (
								<div
									key={i}
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										padding: '14px 0',
										borderTop: '1px solid var(--b1)',
									}}
								>
									<div>
										<div
											style={{
												fontFamily: "'Outfit', sans-serif",
												fontSize: 14,
												fontWeight: 500,
												marginBottom: 4,
											}}
										>
											{item.name}
										</div>
										<div
											style={{
												fontFamily: "'DM Mono', monospace",
												fontSize: 11,
												color: 'var(--t2)',
											}}
										>
											{item.issuer || item.org} · {item.detail}
										</div>
									</div>
									<span
										style={{
											fontFamily: "'DM Mono', monospace",
											fontSize: 11,
											color: 'var(--acc)',
											minWidth: 40,
											textAlign: 'right',
										}}
									>
										{item.year}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
