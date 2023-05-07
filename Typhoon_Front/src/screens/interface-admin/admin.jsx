import React, { useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import"primereact/resources/themes/lara-light-indigo/theme.css"
import"primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
const Admin=()=>{

    const[active,setActive]=useState(null);
    const handleclick = (event) => {
        const { label, parent } = event.item;
        const selectedItem = parent ? `${parent.label}, ${label}` : label;
        setActive(selectedItem);
        console.log(JSON.stringify({ II1_A: selectedItem }));
      };
        const items = [
            {
                label:'Professeurs',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'II1',
                        icon:'pi pi-fw pi-users',
                        
                    },
                    {
                        label:'II2',
                        icon:'pi pi-fw pi-users',
                    },
                    {
                        label:'II3',
                        icon:'pi pi-fw pi-users',
                    }
                ]
            },
            {
                label:'Coordinateurs pédagogiques',
                icon:'pi pi-fw pi-user',
                
            },
            {
                label:'Etudiants',
                icon:'pi pi-fw pi-user',
                items:[
                   
                  
                    {
                        label:'II1',
                        icon:'pi pi-fw pi-users',
                        items:[
                        {
                            label:'A',
                            icon:'pi pi-fw pi-filter',
                            
                            
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'B'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'C'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'D'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'E'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'F'
                        },



                        ]
                    },
                    {
                        label:'II2',
                        icon:'pi pi-fw pi-users',
                        items:[
                        {
                            label:'A',
                            icon:'pi pi-fw pi-filter',
                            
                            
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'B'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'C'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'D'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'E'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'F'
                        },



                        ]
                    },
                    {
                        label:'II3',
                        icon:'pi pi-fw pi-users',
                        items:[
                        {
                            label:'GL',
                            icon:'pi pi-fw pi-filter',
                            
                            
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'IoT'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'IA'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'SE'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'IF'
                        },
                        {
                            icon:'pi pi-fw pi-filter',
                            label:'DSCV'
                        },



                        ]
                    }






                ]
            },
           
        ];
    
        return (
            
            <div>
                <PanelMenu model={items} className="w-full md:w-25rem"  activeitem={active} onItemClick={handleclick}/>
                    
                
               
            </div>
        )

};
export default Admin;