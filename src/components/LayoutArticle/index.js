import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import slugify from "slugify"
import { InView } from "react-intersection-observer"
import "intersection-observer"

import LayoutBase from "../LayoutBase"
import Header from "../Header"
import MenuDropdown from "../MenuDropdown"
import TableOfContent from "../TableOfContent"
import FoldableSection from "../FoldableSection"
import BottomDrawer from "../BottomDrawer"
import Footer from "../Footer"
import SEO from "../seo"
import CallToAction from "../CallToAction"

import "./index.scss"

const addendumIsOpen = true

const INTERSECTION_OBSERVER_THRESHOLDS = [0.25, 0.75]

export default ({
  currentLocation,
  title,
  isDraft,
  abstract,
  metaDescription,
  previewImage,
  children,
  theme,
  toc,
  addendumSections = [],
}) => {
  const [topNavIsExpanded, expandTopNav] = useState(true)
  const [bottomNavIsVisible, showBottomNav] = useState(true)
  const [tocIsVisible, showToc] = useState(false)

  const tocComponent = (
    <TableOfContent>
      <div dangerouslySetInnerHTML={{ __html: toc }}></div>
      {addendumSections.map(section => {
        const id = slugify(section.frontmatter.title)
        return (
          <div key={id}>
            <a href={`#${id}`}>{section.frontmatter.title}</a>
            <div
              style={{ display: addendumIsOpen ? "block" : "none" }}
              className="layout-article__toc__addendum-toc"
              dangerouslySetInnerHTML={{
                __html: section.tableOfContents,
              }}
            ></div>
          </div>
        )
      })}
    </TableOfContent>
  )
  return (
    <LayoutBase>
      <SEO
        title={`Myth: ${title}`}
        description={metaDescription}
        previewImage={previewImage}
      />

      <div
        className={classNames([
          "layout-article",
          theme && `layout-article--theme-${theme}`,
        ])}
      >
        <Header fixed dark slim={topNavIsExpanded ? false : true}>
          <div
            className={classNames([
              "layout-article__dropdown",
              !topNavIsExpanded && "layout-article__dropdown--slim",
            ])}
          >
            <MenuDropdown currentLocation={currentLocation} />
          </div>
        </Header>
        <div
          className={classNames([
            "layout-article__header-buffer",
            !topNavIsExpanded && "layout-article__header-buffer--slim",
          ])}
        ></div>
        <InView
          as="div"
          threshold={INTERSECTION_OBSERVER_THRESHOLDS}
          onChange={(_, { intersectionRatio }) => {
            if (intersectionRatio > 0.75) {
              expandTopNav(true)
              showToc(false)
            } else {
              expandTopNav(false)
              showToc(true)
            }
          }}
        >
          <div className="layout-article__fullwidth-abstract theme-background-gradient-light">
            <div className="layout-article__inner">
              <div className="layout-article__fullwidth-abstract__inner">
                <h1 className="layout-article__title">{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: abstract }}></div>
              </div>
            </div>
          </div>
        </InView>

        <div className="layout-article__inner">
          <div className="layout-article__content">
            <div className="layout-article__content__mainpart">
              {/* Main article text */}
              {isDraft && (
                <span style={{ color: "red", fontSize: "40px" }}>
                  - This is a working draft -
                </span>
              )}
              <article>{children}</article>
              <CallToAction>
                <Link to="/about#contact">Please get in touch</Link> to share
                comments, criticisms, or other resources that we might have
                missed!
              </CallToAction>
              {/* Addendum sections (Bibliography etc.) */}
              {addendumSections.map(section => {
                const id = slugify(section.frontmatter.title)
                return (
                  <FoldableSection
                    key={id}
                    heading={section.frontmatter.title}
                    headingId={id}
                  >
                    <div>{section.renderedHtml}</div>
                  </FoldableSection>
                )
              })}
            </div>
            <div className="layout-article__content__sidebar">
              <div
                className={classNames([
                  "layout-article__toc",
                  !tocIsVisible && "layout-article__toc--hidden",
                ])}
              >
                {tocComponent}
              </div>
            </div>
          </div>
        </div>

        <div className="layout-article__mobile-toc">
          <BottomDrawer
            buttonText="Table of Contents"
            hidden={!bottomNavIsVisible}
            onClick={() => {
              expandTopNav(false)
            }}
          >
            {tocComponent}
          </BottomDrawer>
        </div>

        <Footer />
      </div>
    </LayoutBase>
  )
}
