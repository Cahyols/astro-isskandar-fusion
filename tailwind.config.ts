import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'glow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.6'
					}
				},
				'rotate-360': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				},
				'typing': {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				},
				'blink-caret': {
					'0%, 100%': {
						borderColor: 'transparent'
					},
					'50%': {
						borderColor: 'hsl(var(--primary))'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-40rem 0',
					},
					'100%': {
						backgroundPosition: '40rem 0',
					},
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 15px 2px rgba(var(--primary-rgb), 0.5)'
					},
					'50%': { 
						opacity: '0.7',
						boxShadow: '0 0 25px 5px rgba(var(--primary-rgb), 0.8)'
					}
				},
				'text-reveal': {
					'0%': { maxWidth: '0', opacity: '0' },
					'100%': { maxWidth: '100%', opacity: '1' }
				},
				'pan-image': {
					'0%': { backgroundPosition: '0% 0%' },
					'25%': { backgroundPosition: '100% 0%' },
					'50%': { backgroundPosition: '100% 100%' },
					'75%': { backgroundPosition: '0% 100%' },
					'100%': { backgroundPosition: '0% 0%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
				'grid-flash': {
					'0%, 100%': { opacity: '0.2' },
					'50%': { opacity: '0.5' }
				},
				'reveal-blur': {
					'0%': { filter: 'blur(10px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				},
				'cyber-glow': {
					'0%, 100%': { 
						borderColor: 'rgba(var(--primary-rgb), 0.3)',
						boxShadow: '0 0 5px rgba(var(--primary-rgb), 0.3), inset 0 0 5px rgba(var(--primary-rgb), 0.3)'
					},
					'50%': { 
						borderColor: 'rgba(var(--primary-rgb), 0.8)',
						boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.8), inset 0 0 10px rgba(var(--primary-rgb), 0.8)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'glow': 'glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-360 12s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'text-reveal': 'text-reveal 1.5s ease-out forwards',
				'pan-image': 'pan-image 30s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s linear infinite',
				'grid-flash': 'grid-flash 8s ease-in-out infinite',
				'reveal-blur': 'reveal-blur 0.8s ease-out forwards',
				'cyber-glow': 'cyber-glow 3s ease-in-out infinite',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
				'display': ['Space Grotesk', 'sans-serif'],
				'tech': ['Orbitron', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': 'linear-gradient(to right, rgba(75, 85, 99, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(75, 85, 99, 0.1) 1px, transparent 1px)',
				'tech-circuit': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 13 L20 87 M80 13 L80 87 M12 20 L88 20 M12 80 L88 80 M25 35 L35 35 L35 25 M65 35 L75 35 L75 25 M25 65 L35 65 L35 75 M65 65 L75 65 L75 75\' stroke=\'rgba(64, 76, 103, 0.2)\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E")',
				'tech-circuit-dark': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 13 L20 87 M80 13 L80 87 M12 20 L88 20 M12 80 L88 80 M25 35 L35 35 L35 25 M65 35 L75 35 L75 25 M25 65 L35 65 L35 75 M65 65 L75 65 L75 75\' stroke=\'rgba(124, 58, 237, 0.25)\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E")',
				'cyber-grid': 'linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)',
				'diagonal-lines': 'repeating-linear-gradient(45deg, rgba(124, 58, 237, 0.1), rgba(124, 58, 237, 0.1) 1px, transparent 1px, transparent 10px)',
				'radial-glow': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
				'shimmer': 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
