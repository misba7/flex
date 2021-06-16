import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from '../../../../app/components'
import GluuFormDetailRow from '../../../../app/routes/Apps/Gluu/GluuFormDetailRow'
import { useTranslation } from 'react-i18next'

const CustomScriptDetailPage = ({ row, loading }) => {
  const { t } = useTranslation()
  function getBadgeTheme(status) {
    if (status) {
      return 'primary'
    } else {
      return 'info'
    }
  }

  return (
    <React.Fragment>
      {/* START Content */}

      <Container style={{ backgroundColor: '#F5F5F5' }}>
        <Row>
          <Col sm={4}>
            <GluuFormDetailRow label="Inum" value={row.inum} />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow label="Name" value={row.name} />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <GluuFormDetailRow label="LocationType" value={row.locationType} />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow label="Description" value={row.description} />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <GluuFormDetailRow
              label="Internal"
              isBadge
              badgeColor={getBadgeTheme(row.internal)}
              value={row.internal ? 'true' : 'false'}
            />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow
              label="Enabled"
              isBadge
              badgeColor={getBadgeTheme(row.enabled)}
              value={row.enabled ? 'true' : 'false'}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <GluuFormDetailRow
              label={t("Programming Language")}
              value={row.programmingLanguage}
            />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow label={t("Script Type")} value={row.scriptType} />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <GluuFormDetailRow label={t("Level")} value={row.level} />
          </Col>
          <Col sm={6}>
            <GluuFormDetailRow label={t("revision")} value={row.revision} />
          </Col>
        </Row>

        <Row>
          <Col sm={4}> {t("Module Properties")}: </Col>
          <Col sm={2}>
            {Object.keys(row.moduleProperties).map((key, i) => (
              <GluuFormDetailRow
                key={key}
                label={t("value")+"1"}
                value={String(row.moduleProperties[key].value1)}
              />
            ))}
          </Col>
          <Col sm={2}>
            {Object.keys(row.moduleProperties).map((key, i) => (
              <GluuFormDetailRow
                key={key}
                label={t("value")+"2"}
                value={String(row.moduleProperties[key].value2)}
              />
            ))}
          </Col>
          <Col sm={2}>
            {Object.keys(row.moduleProperties).map((key, i) => (
              <GluuFormDetailRow
                key={key}
                label={t("description")}
                value={String(row.moduleProperties[key].description)}
              />
            ))}
          </Col>
        </Row>
        {/* END Content */}
      </Container>
    </React.Fragment>
  )
}
export default CustomScriptDetailPage
