import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { DotFilledIcon } from '@radix-ui/react-icons';


export function OrderDropDown() {
  const [order, setOrder] = useState("teste")

  return(
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          Ordenar Por
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
        <DropdownMenu.RadioGroup value={order} onValueChange={setOrder}>
            <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="pedro">
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="colm">
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}