import React from "react"
import styled from "styled-components"

function getTotalHeight(amountOfItems, itemHeight, itemDistance) {
  return (
    amountOfItems * parseInt(itemHeight) +
    (amountOfItems - 1) * parseInt(itemDistance)
  )
}

function getDistanceToCenterY(
  amountOfItems,
  itemHeight,
  nthItem,
  itemDistance
) {
  const totalHeight = getTotalHeight(amountOfItems, itemHeight, itemDistance)
  const selfY =
    nthItem * parseInt(itemHeight) + nthItem * parseInt(itemDistance)
  const centerY = totalHeight / 2
  return centerY - selfY
}

function getClipPathCoordinates(
  inverted,
  amountOfItems,
  itemHeight,
  nthItem,
  itemDistance,
  arrowWidth
) {
  const distanceToCenterY = getDistanceToCenterY(
    amountOfItems,
    itemHeight,
    nthItem,
    itemDistance
  )

  const isTopPart = distanceToCenterY > 0
  const clipPathCoordinates =
    "polygon(" +
    [
      `0 ${isTopPart ? 0 : -distanceToCenterY}px`,
      `0 ${
        isTopPart
          ? itemHeight
          : parseInt(itemHeight) + -distanceToCenterY + "px"
      }`,
      `${arrowWidth} ${isTopPart ? distanceToCenterY + "px" : 0}`,
    ].join(",") +
    ")"

  const clipPathCoordinatesInverted =
    "polygon(" +
    [
      `${arrowWidth} ${isTopPart ? 0 : -distanceToCenterY}px`,
      `${arrowWidth} ${
        isTopPart
          ? itemHeight
          : parseInt(itemHeight) + -distanceToCenterY + "px"
      }`,
      `0 ${isTopPart ? distanceToCenterY + "px" : 0}`,
    ].join(",") +
    ")"
  return inverted ? clipPathCoordinatesInverted : clipPathCoordinates
}

const StyledItem = styled.div`
  position: relative;
  margin-bottom: ${props => props.itemDistance};
  margin-right: ${props => (props.inverted ? 0 : props.arrowWidth)};
  margin-left: ${props => (props.inverted ? props.arrowWidth : 0)};
  height: ${props => props.itemHeight};
  width: ${props => props.itemWidth || "auto"};
  display: flex;
  &:after {
    content: "";
    position: absolute;
    top: ${props =>
      getDistanceToCenterY(
        props.amountOfItems,
        props.itemHeight,
        props.nthItem,
        props.itemDistance
      ) > 0
        ? 0
        : getDistanceToCenterY(
            props.amountOfItems,
            props.itemHeight,
            props.nthItem,
            props.itemDistance
          ) + "px"};
    left: ${props =>
      props.inverted ? -parseInt(props.arrowWidth) + "px" : "unset"};
    right: ${props =>
      props.inverted ? "unset" : -parseInt(props.arrowWidth) + "px"};
    height: ${props =>
      getTotalHeight(
        props.amountOfItems,
        props.itemHeight,
        props.itemDistance
      )}px;
    width: ${props => props.arrowWidth};
    clip-path: ${props =>
      props.inverted
        ? getClipPathCoordinates(
            true,
            props.amountOfItems,
            props.itemHeight,
            props.nthItem,
            props.itemDistance,
            props.arrowWidth
          )
        : getClipPathCoordinates(
            false,
            props.amountOfItems,
            props.itemHeight,
            props.nthItem,
            props.itemDistance,
            props.arrowWidth
          )};
    display: ${props => props.arrowStyle && props.arrowStyle.display};
    transform-origin: ${props => (props.inverted ? "top right" : "top left")};
  }

  .jellyfish__list-item {
    opacity: 1;
  }
`

export default ({
  children,
  listClassName,
  itemClassName,
  litemClassName,
  ...props
}) => {
  return (
    <ul
      className={listClassName}
      style={{ margin: 0, padding: 0, listStyle: "none" }}
    >
      {children.map((item, i) => {
        const themingClassToBePassed = item.props.className
          ? item.props.className
              .split(" ")
              .filter(
                el =>
                  el.indexOf("--colorscheme-") > -1 ||
                  el.indexOf("--unselected") > -1 ||
                  el.indexOf("--passclass") > -1
              )
              .join(" ")
          : ""
        return (
          <li key={item.key || item} className={litemClassName}>
            <StyledItem
              {...props}
              amountOfItems={children.length}
              nthItem={i}
              className={`${itemClassName} ${themingClassToBePassed}`}
            >
              {item}
            </StyledItem>
          </li>
        )
      })}
    </ul>
  )
}
