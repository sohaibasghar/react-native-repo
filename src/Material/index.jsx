import React from 'react';
import AddModal from '../components/AddExpenseModal';
import { Text } from 'react-native';
import Accordion from '../components/Accordion';

const data = {
	material: [
		{
			id: 21,
			vendor_id: '12',
			category_id: '32',
			name: 'Expense 1',
			material: 'material',
			amount: '170.00',
			date_paid: '2023-06-20',
			files: 'file1.txt',
			receipt: 'receipt1.png',
			pdf: 'document1.pdf',
			status: 'paid',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 12,
				name: 'Gilbert Lopez',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 32,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 22,
			vendor_id: '1',
			category_id: '31',
			name: 'Expense 2',
			material: 'material',
			amount: '850.00',
			date_paid: '2023-06-10',
			files: 'file2.txt',
			receipt: 'receipt2.png',
			pdf: 'document2.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 1,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 31,
				name: 'Demo',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 23,
			vendor_id: '3',
			category_id: '31',
			name: 'Expense 3',
			material: 'material',
			amount: '813.00',
			date_paid: '2023-08-23',
			files: 'file3.txt',
			receipt: 'receipt3.png',
			pdf: 'document3.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 3,
				name: 'Gilbert Lopez',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 31,
				name: 'Demo',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 27,
			vendor_id: '5',
			category_id: '9',
			name: 'Expense 7',
			material: 'material',
			amount: '199.00',
			date_paid: '2024-01-25',
			files: 'file7.txt',
			receipt: 'receipt7.png',
			pdf: 'document7.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 5,
				name: 'Lowes',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 9,
				name: 'Tiling',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 29,
			vendor_id: '17',
			category_id: '24',
			name: 'Expense 9',
			material: 'material',
			amount: '707.00',
			date_paid: '2024-01-27',
			files: 'file9.txt',
			receipt: 'receipt9.png',
			pdf: 'document9.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 17,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 24,
				name: 'Flooring',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 30,
			vendor_id: '20',
			category_id: '30',
			name: 'Expense 10',
			material: 'material',
			amount: '183.00',
			date_paid: '2024-02-14',
			files: 'file10.txt',
			receipt: 'receipt10.png',
			pdf: 'document10.pdf',
			status: 'pending',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 20,
				name: 'Elvis Leonardo Estrada Vera',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 30,
				name: 'Countertops',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 33,
			vendor_id: '26',
			category_id: '34',
			name: 'Expense 13',
			material: 'material',
			amount: '328.00',
			date_paid: '2023-10-09',
			files: 'file13.txt',
			receipt: 'receipt13.png',
			pdf: 'document13.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 26,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 34,
				name: 'Paint - Interior',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 34,
			vendor_id: '11',
			category_id: '2',
			name: 'Expense 14',
			material: 'material',
			amount: '489.00',
			date_paid: '2023-10-18',
			files: 'file14.txt',
			receipt: 'receipt14.png',
			pdf: 'document14.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 11,
				name: 'Elvis Leonardo Estrada Vera',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 2,
				name: 'Carpentry',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 37,
			vendor_id: '12',
			category_id: '3',
			name: 'Expense 17',
			material: 'material',
			amount: '146.00',
			date_paid: '2023-08-08',
			files: 'file17.txt',
			receipt: 'receipt17.png',
			pdf: 'document17.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 12,
				name: 'Gilbert Lopez',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 3,
				name: 'Countertops',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 44,
			vendor_id: '1',
			category_id: '14',
			name: 'Expense 24',
			material: 'material',
			amount: '840.00',
			date_paid: '2024-05-26',
			files: 'file24.txt',
			receipt: 'receipt24.png',
			pdf: 'document24.pdf',
			status: 'pending',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 1,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 14,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		},
		{
			id: 45,
			vendor_id: '2',
			category_id: '31',
			name: 'Expense 25',
			material: 'material',
			amount: '402.00',
			date_paid: '2024-06-08',
			files: 'file25.txt',
			receipt: 'receipt25.png',
			pdf: 'document25.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 2,
				name: 'Elvis Leonardo Estrada Vera',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 31,
				name: 'Demo',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 49,
			vendor_id: '8',
			category_id: '24',
			name: 'Expense 29',
			material: 'material',
			amount: '359.00',
			date_paid: '2023-10-13',
			files: 'file29.txt',
			receipt: 'receipt29.png',
			pdf: 'document29.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 8,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 24,
				name: 'Flooring',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 50,
			vendor_id: '7',
			category_id: '24',
			name: 'Expense 30',
			material: 'material',
			amount: '225.00',
			date_paid: '2023-12-20',
			files: 'file30.txt',
			receipt: 'receipt30.png',
			pdf: 'document30.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 7,
				name: 'Rew Materials',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 24,
				name: 'Flooring',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 53,
			vendor_id: '4',
			category_id: '26',
			name: 'Expense 33',
			material: 'material',
			amount: '730.00',
			date_paid: '2024-01-22',
			files: 'file33.txt',
			receipt: 'receipt33.png',
			pdf: 'document33.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 4,
				name: 'Home Depot',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 26,
				name: 'Pluming',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 56,
			vendor_id: '8',
			category_id: '3',
			name: 'Expense 36',
			material: 'material',
			amount: '271.00',
			date_paid: '2023-10-25',
			files: 'file36.txt',
			receipt: 'receipt36.png',
			pdf: 'document36.pdf',
			status: 'paid',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 8,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 3,
				name: 'Countertops',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 58,
			vendor_id: '18',
			category_id: '16',
			name: 'Expense 38',
			material: 'material',
			amount: '554.00',
			date_paid: '2024-04-02',
			files: 'file38.txt',
			receipt: 'receipt38.png',
			pdf: 'document38.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 18,
				name: 'Y-Bar-A Waste',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 16,
				name: 'Paint - Interior',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		},
		{
			id: 59,
			vendor_id: '14',
			category_id: '23',
			name: 'Expense 39',
			material: 'material',
			amount: '362.00',
			date_paid: '2024-02-13',
			files: 'file39.txt',
			receipt: 'receipt39.png',
			pdf: 'document39.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 14,
				name: 'Lowes',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 23,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 60,
			vendor_id: '18',
			category_id: '23',
			name: 'Expense 40',
			material: 'material',
			amount: '947.00',
			date_paid: '2024-05-06',
			files: 'file40.txt',
			receipt: 'receipt40.png',
			pdf: 'document40.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 18,
				name: 'Y-Bar-A Waste',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 23,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 61,
			vendor_id: '13',
			category_id: '23',
			name: 'Expense 41',
			material: 'material',
			amount: '931.00',
			date_paid: '2023-11-21',
			files: 'file41.txt',
			receipt: 'receipt41.png',
			pdf: 'document41.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 13,
				name: 'Home Depot',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 23,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 62,
			vendor_id: '24',
			category_id: '27',
			name: 'Expense 42',
			material: 'material',
			amount: '737.00',
			date_paid: '2024-01-19',
			files: 'file42.txt',
			receipt: 'receipt42.png',
			pdf: 'document42.pdf',
			status: 'pending',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 24,
				name: 'Pinnacle Countertop Solutions',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 27,
				name: 'Tiling',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 63,
			vendor_id: '4',
			category_id: '17',
			name: 'Expense 43',
			material: 'material',
			amount: '764.00',
			date_paid: '2024-03-09',
			files: 'file43.txt',
			receipt: 'receipt43.png',
			pdf: 'document43.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 4,
				name: 'Home Depot',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 17,
				name: 'Pluming',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		},
		{
			id: 65,
			vendor_id: '12',
			category_id: '30',
			name: 'Expense 45',
			material: 'material',
			amount: '694.00',
			date_paid: '2023-11-22',
			files: 'file45.txt',
			receipt: 'receipt45.png',
			pdf: 'document45.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 12,
				name: 'Gilbert Lopez',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 30,
				name: 'Countertops',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 68,
			vendor_id: '26',
			category_id: '36',
			name: 'Expense 48',
			material: 'material',
			amount: '687.00',
			date_paid: '2024-03-23',
			files: 'file48.txt',
			receipt: 'receipt48.png',
			pdf: 'document48.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 26,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 36,
				name: 'Tiling',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 70,
			vendor_id: '10',
			category_id: '12',
			name: 'Expense 50',
			material: 'material',
			amount: '944.00',
			date_paid: '2024-05-22',
			files: 'file50.txt',
			receipt: 'receipt50.png',
			pdf: 'document50.pdf',
			status: 'pending',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 10,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 12,
				name: 'Countertops',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		}
	],
	labour: [
		{
			id: 24,
			vendor_id: '6',
			category_id: '8',
			name: 'Expense 4',
			material: 'labour',
			amount: '963.00',
			date_paid: '2023-07-23',
			files: 'file4.txt',
			receipt: 'receipt4.png',
			pdf: 'document4.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 6,
				name: 'Pinnacle Countertop Solutions',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 8,
				name: 'Pluming',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 25,
			vendor_id: '10',
			category_id: '2',
			name: 'Expense 5',
			material: 'labour',
			amount: '478.00',
			date_paid: '2023-10-16',
			files: 'file5.txt',
			receipt: 'receipt5.png',
			pdf: 'document5.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 10,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 2,
				name: 'Carpentry',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 26,
			vendor_id: '17',
			category_id: '14',
			name: 'Expense 6',
			material: 'labour',
			amount: '442.00',
			date_paid: '2024-04-29',
			files: 'file6.txt',
			receipt: 'receipt6.png',
			pdf: 'document6.pdf',
			status: 'pending',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 17,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 14,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		},
		{
			id: 28,
			vendor_id: '26',
			category_id: '26',
			name: 'Expense 8',
			material: 'labour',
			amount: '230.00',
			date_paid: '2023-08-09',
			files: 'file8.txt',
			receipt: 'receipt8.png',
			pdf: 'document8.pdf',
			status: 'paid',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 26,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 26,
				name: 'Pluming',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 31,
			vendor_id: '24',
			category_id: '34',
			name: 'Expense 11',
			material: 'labour',
			amount: '950.00',
			date_paid: '2023-07-28',
			files: 'file11.txt',
			receipt: 'receipt11.png',
			pdf: 'document11.pdf',
			status: 'pending',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 24,
				name: 'Pinnacle Countertop Solutions',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 34,
				name: 'Paint - Interior',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 32,
			vendor_id: '14',
			category_id: '14',
			name: 'Expense 12',
			material: 'labour',
			amount: '924.00',
			date_paid: '2023-08-06',
			files: 'file12.txt',
			receipt: 'receipt12.png',
			pdf: 'document12.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 14,
				name: 'Lowes',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 14,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		},
		{
			id: 35,
			vendor_id: '9',
			category_id: '27',
			name: 'Expense 15',
			material: 'labour',
			amount: '333.00',
			date_paid: '2023-08-07',
			files: 'file15.txt',
			receipt: 'receipt15.png',
			pdf: 'document15.pdf',
			status: 'paid',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 9,
				name: 'Y-Bar-A Waste',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 27,
				name: 'Tiling',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 36,
			vendor_id: '9',
			category_id: '1',
			name: 'Expense 16',
			material: 'labour',
			amount: '861.00',
			date_paid: '2024-05-12',
			files: 'file16.txt',
			receipt: 'receipt16.png',
			pdf: 'document16.pdf',
			status: 'paid',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 9,
				name: 'Y-Bar-A Waste',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 1,
				name: 'Appliance',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 38,
			vendor_id: '7',
			category_id: '36',
			name: 'Expense 18',
			material: 'labour',
			amount: '180.00',
			date_paid: '2023-09-25',
			files: 'file18.txt',
			receipt: 'receipt18.png',
			pdf: 'document18.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 7,
				name: 'Rew Materials',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 36,
				name: 'Tiling',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 39,
			vendor_id: '8',
			category_id: '10',
			name: 'Expense 19',
			material: 'labour',
			amount: '150.00',
			date_paid: '2024-05-27',
			files: 'file19.txt',
			receipt: 'receipt19.png',
			pdf: 'document19.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 8,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 10,
				name: 'Appliance',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		},
		{
			id: 40,
			vendor_id: '11',
			category_id: '3',
			name: 'Expense 20',
			material: 'labour',
			amount: '252.00',
			date_paid: '2024-01-05',
			files: 'file20.txt',
			receipt: 'receipt20.png',
			pdf: 'document20.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 11,
				name: 'Elvis Leonardo Estrada Vera',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 3,
				name: 'Countertops',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 41,
			vendor_id: '17',
			category_id: '20',
			name: 'Expense 21',
			material: 'labour',
			amount: '579.00',
			date_paid: '2024-02-21',
			files: 'file21.txt',
			receipt: 'receipt21.png',
			pdf: 'document21.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 17,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 20,
				name: 'Carpentry',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 42,
			vendor_id: '13',
			category_id: '3',
			name: 'Expense 22',
			material: 'labour',
			amount: '104.00',
			date_paid: '2024-02-23',
			files: 'file22.txt',
			receipt: 'receipt22.png',
			pdf: 'document22.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 13,
				name: 'Home Depot',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 3,
				name: 'Countertops',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 43,
			vendor_id: '22',
			category_id: '9',
			name: 'Expense 23',
			material: 'labour',
			amount: '416.00',
			date_paid: '2023-10-13',
			files: 'file23.txt',
			receipt: 'receipt23.png',
			pdf: 'document23.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 22,
				name: 'Home Depot',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 9,
				name: 'Tiling',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 46,
			vendor_id: '19',
			category_id: '34',
			name: 'Expense 26',
			material: 'labour',
			amount: '265.00',
			date_paid: '2023-10-19',
			files: 'file26.txt',
			receipt: 'receipt26.png',
			pdf: 'document26.pdf',
			status: 'paid',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 19,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 34,
				name: 'Paint - Interior',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 47,
			vendor_id: '25',
			category_id: '34',
			name: 'Expense 27',
			material: 'labour',
			amount: '441.00',
			date_paid: '2023-11-26',
			files: 'file27.txt',
			receipt: 'receipt27.png',
			pdf: 'document27.pdf',
			status: 'paid',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 25,
				name: 'Rew Materials',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 34,
				name: 'Paint - Interior',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 48,
			vendor_id: '13',
			category_id: '23',
			name: 'Expense 28',
			material: 'labour',
			amount: '175.00',
			date_paid: '2023-10-03',
			files: 'file28.txt',
			receipt: 'receipt28.png',
			pdf: 'document28.pdf',
			status: 'pending',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 13,
				name: 'Home Depot',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 23,
				name: 'Drywall & Mudwork',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 51,
			vendor_id: '6',
			category_id: '13',
			name: 'Expense 31',
			material: 'labour',
			amount: '303.00',
			date_paid: '2023-09-19',
			files: 'file31.txt',
			receipt: 'receipt31.png',
			pdf: 'document31.pdf',
			status: 'pending',
			payment: 'debit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 6,
				name: 'Pinnacle Countertop Solutions',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 13,
				name: 'Demo',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			}
		},
		{
			id: 52,
			vendor_id: '23',
			category_id: '2',
			name: 'Expense 32',
			material: 'labour',
			amount: '213.00',
			date_paid: '2023-06-21',
			files: 'file32.txt',
			receipt: 'receipt32.png',
			pdf: 'document32.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 23,
				name: 'Lowes',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 2,
				name: 'Carpentry',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 54,
			vendor_id: '8',
			category_id: '24',
			name: 'Expense 34',
			material: 'labour',
			amount: '927.00',
			date_paid: '2023-11-26',
			files: 'file34.txt',
			receipt: 'receipt34.png',
			pdf: 'document34.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 8,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 24,
				name: 'Flooring',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 55,
			vendor_id: '10',
			category_id: '6',
			name: 'Expense 35',
			material: 'labour',
			amount: '995.00',
			date_paid: '2023-09-28',
			files: 'file35.txt',
			receipt: 'receipt35.png',
			pdf: 'document35.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 10,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			},
			category: {
				id: 6,
				name: 'Flooring',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 57,
			vendor_id: '1',
			category_id: '29',
			name: 'Expense 37',
			material: 'labour',
			amount: '820.00',
			date_paid: '2023-11-14',
			files: 'file37.txt',
			receipt: 'receipt37.png',
			pdf: 'document37.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 1,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 29,
				name: 'Carpentry',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 64,
			vendor_id: '5',
			category_id: '8',
			name: 'Expense 44',
			material: 'labour',
			amount: '186.00',
			date_paid: '2023-10-02',
			files: 'file44.txt',
			receipt: 'receipt44.png',
			pdf: 'document44.pdf',
			status: 'overdue',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 5,
				name: 'Lowes',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 8,
				name: 'Pluming',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		},
		{
			id: 66,
			vendor_id: '19',
			category_id: '22',
			name: 'Expense 46',
			material: 'labour',
			amount: '301.00',
			date_paid: '2024-02-27',
			files: 'file46.txt',
			receipt: 'receipt46.png',
			pdf: 'document46.pdf',
			status: 'pending',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 19,
				name: 'Custom Innovations Granite & Marble LLC',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 22,
				name: 'Demo',
				created_at: '2024-06-08T14:46:23.000000Z',
				updated_at: '2024-06-08T14:46:23.000000Z'
			}
		},
		{
			id: 67,
			vendor_id: '26',
			category_id: '28',
			name: 'Expense 47',
			material: 'labour',
			amount: '603.00',
			date_paid: '2024-02-29',
			files: 'file47.txt',
			receipt: 'receipt47.png',
			pdf: 'document47.pdf',
			status: 'overdue',
			payment: 'credit',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 26,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			},
			category: {
				id: 28,
				name: 'Appliance',
				created_at: '2024-06-08T14:47:15.000000Z',
				updated_at: '2024-06-08T14:47:15.000000Z'
			}
		},
		{
			id: 69,
			vendor_id: '8',
			category_id: '1',
			name: 'Expense 49',
			material: 'labour',
			amount: '801.00',
			date_paid: '2023-09-10',
			files: 'file49.txt',
			receipt: 'receipt49.png',
			pdf: 'document49.pdf',
			status: 'paid',
			payment: 'cash',
			created_at: '2024-06-08T14:47:15.000000Z',
			updated_at: '2024-06-08T14:47:15.000000Z',
			vendor: {
				id: 8,
				name: 'Sherwin Williams',
				created_at: '2024-06-08T14:41:14.000000Z',
				updated_at: '2024-06-08T14:41:14.000000Z'
			},
			category: {
				id: 1,
				name: 'Appliance',
				created_at: '2024-06-08T14:40:49.000000Z',
				updated_at: '2024-06-08T14:40:49.000000Z'
			}
		}
	]
};
const Material = ({ navigation }) => {
	return <Accordion data={data} />;
};

export default Material;
